import { Request } from "express";
import { RowDataPacket } from "mysql2";
import pool from "../utils/mysql";
import { Product } from "../types/types";
import formidable, { Fields, Files } from "formidable"
import fs from 'fs'
import dotenv from "dotenv"
import { PutObjectCommand, PutObjectCommandInput, S3Client } from "@aws-sdk/client-s3";
import { pagination } from "../utils/pagination";

dotenv.config();

const getAllProducts = async (req: Request) => {
  const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)
  const query = req.body.query;

  let sqlQuery = `
          SELECT 
              products.*, 
              organizations.brand, 
              organizations.vendor,
              sku.sku, 
              sku.price,
              categories.categories
          FROM 
              products
          JOIN 
              organizations ON products.organization_id = organizations.org_id
          JOIN 
              sku ON products.sku_id = sku.sku_id
          JOIN 
              categories ON organizations.category_id = categories.category_id
        `;

  const sqlParams: (string | number)[] = [];
  if (query) {
    sqlQuery += ` WHERE products.product_name LIKE ? `;
    sqlParams.push(`%${query}%`);
  }

  sqlQuery += ` LIMIT ? OFFSET ?`;
  sqlParams.push(limit, offset);

  const [rows] = await pool.query<Product[]>(sqlQuery, sqlParams);

  const [skuList] = rows.map((row) => row.sku);

  let status = 1;
  if (skuList > 15) {
    status = 0;
  } else if (skuList >= 1) {
    status = 1;
  } else {
    status = 2;
  }

  const [totalRows] = await pool.query<RowDataPacket[]>(
    "SELECT COUNT(*) as total FROM products" +
      (query ? " WHERE product_name LIKE ?" : ""),
    query ? [`%${query}%`] : []
  );
  const total = totalRows[0].total;

  return {
    products: rows,
    status,
    total,
    pageIndex,
    totalPages: Math.ceil(total / limit),
  };
};

const newProduct = async (req: Request) => {
  const {
    product_name,
    code,
    categories,
    price,
    url,
    sku,
    bulk_dp,
    taxRate,
    tags,
    brand,
    vendor,
    description,
  } = req.body;

  let tag_id = 1;
  if (tags === "trend") {
    tag_id = 1;
  } else {
    tag_id = 2;
  }

  const [cat] = await pool.query<RowDataPacket[]>(
    `SELECT category_id from categories WHERE categories = ?`,
    [categories]
  );
  const category_id = cat.map((id) => id.category_id)[0];

  const [skuResult] = await pool.query(
    `INSERT INTO sku (sku, price, bulk_dp, taxrate) VALUES (?, ?, ?, ?)`,
    [sku, price, bulk_dp, taxRate]
  );
  const skuId = (skuResult as any).insertId;

  const [orgResult] = await pool.query(
    `INSERT INTO organizations (tag_id, category_id, brand, vendor) VALUES (?, ?, ?, ?)`,
    [tag_id, category_id, brand, vendor]
  );
  const organizationId = (orgResult as any).insertId;

  await pool.query(
    `INSERT INTO products (product_name, organization_id, sku_id, code, description, img, created_date, updated_date) 
          VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [product_name, organizationId, skuId, code, description, url]
  );
};

const getSingleProduct = async (req: Request) => {
  const id = req.query.id;
  
  const [data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM products WHERE product_id = ?`,
    [id]
  );

  const {
    product_id,
    product_name,
    code,
    organization_id,
    sku_id,
    img,
    description,
  } = data[0];

  const url = img;
  const [org_data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM organizations WHERE org_id = ?`,
    [organization_id]
  );

  const { brand, vendor } = org_data[0];

  const { category_id, tag_id } = org_data[0];

  const [category_data] = await pool.query<RowDataPacket[]>(
    `SELECT categories FROM categories WHERE category_id = ?`,
    [category_id]
  );
  const { categories } = category_data[0];

  const tag_data = await pool.query<RowDataPacket[]>(
    `SELECT tags FROM tags WHERE tags_id = ?`,
    [tag_id]
  );
  const tags = tag_data[0];

  const [sku_data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM sku WHERE sku_id = ?`,
    [sku_id]
  );
  const { price, sku, bulk_dp, taxrate } = sku_data[0];

  const imgList = [{
    id: 'img-001',
    name: 'img-01',
    url: url,
    img: {}
  }]


  return {
    product_id,
    product_name,
    code,
    categories,
    price,
    brand,
    url,
    vendor,
    tags,
    description,
    bulk_dp,
    sku,
    taxrate,
    imgList,
  };
};

const eraseProduct = async (req: Request) => {
  const userId = req.body.product_id;

  const [DeletedProduct] = await pool.query(
    "DELETE FROM products WHERE product_id = ? ",
    [userId]
  );
  return DeletedProduct;
};

const updateProduct = async (req: Request) => {
  const {
    product_name,
    tag,
    url,
    code,
    description,
    product_id,
    categories,
    price,
    brand,
    vendor,
    sku,
    bulk_dp,
    taxrate,
  } = req.body;

  const updatedProd = await pool.query(
    `UPDATE products
    SET product_name = ?, code = ?, description = ?, img = ? 
    WHERE product_id = ?
    `,
    [product_name, code, description,url, product_id]
  )

  const [changedOrg] = await pool.query<RowDataPacket[]>(
    `
    SELECT organization_id, sku_id FROM products
    WHERE product_id = ?
    `,
    [product_id]
  )
  const {organization_id} = changedOrg[0]
  const {sku_id} = changedOrg[0]

  const [takeCategory] = await pool.query<RowDataPacket[]>(
    `
    SELECT category_id FROM categories WHERE categories = ?
    `,
    [categories]
  )

  const {category_id} = takeCategory[0]

  const updatedOrg = await pool.query<RowDataPacket[]>(
    `
    UPDATE organizations
    SET brand = ?, vendor = ?, category_id = ?
    WHERE org_id = ?
    `,
    [brand, vendor, category_id, organization_id]
  )
  const skuUpdate = await pool.query<RowDataPacket[]>(
    `
    UPDATE sku
    SET price = ?, sku = ?, bulk_dp = ?, taxrate = ?
    WHERE sku_id = ?
    `,
    [price, sku, bulk_dp, taxrate, sku_id])
};


const s3Client = new S3Client({
  region: process.env.AWS_REGION as string,

  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

const BUCKET_NAME = process.env.AWS_BUCKET_NAME as string;

const hitS3Api = async (req: Request) => {
  return new Promise<{ response: any, fileUrl: string }>((resolve, reject) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
      if (err) {
        console.log("Error parsing form:", err);
        reject({ error: "Error parsing form data" });
        return;
      }

      const uploadedFile = files.img;

      if (!uploadedFile) {
        reject({ error: "No file uploaded" });
        return;
      }

      const filesArray = Array.isArray(uploadedFile) ? uploadedFile : [uploadedFile];

      try {
        for (const uploadedFile of filesArray) {
          if (!uploadedFile.filepath) {
            reject({ error: "File missing filepath" });
            return;
          }

          const fileContent = fs.readFileSync(uploadedFile.filepath);

          const uploadParams = {
            Bucket: BUCKET_NAME,
            Key: `uploads/${Date.now()}-${uploadedFile.originalFilename}`,
            Body: fileContent,
            ContentType: uploadedFile.mimetype || "application/octet-stream",
          };

          const command = new PutObjectCommand(uploadParams);
          const response = await s3Client.send(command);
          const region = "ap-south-1"; 
          
          const fileUrl = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${uploadParams.Key}`;
          console.log('newUrl', fileUrl)

          resolve({ response, fileUrl });
        }
      } catch (uploadErr) {
        console.error("Error uploading to S3:", uploadErr);
        reject({ error: "Error uploading to S3" });
      }
    });
  });
};


export {
  getAllProducts,
  getSingleProduct,
  newProduct,
  eraseProduct,
  updateProduct,
  hitS3Api,
};
