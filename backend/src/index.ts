import express, { Request, Response } from "express"
import cors from "cors"
import pool from "./db";
import { RowDataPacket } from "mysql2";

const app = express();
app.use(cors())
app.use(express.json());

interface Product extends RowDataPacket {
    id: number;
    product_name: string;
    price: number;
    category: string;
    sku: number;
    status: number;
    created_date: Date;
    updated_date: Date;
}

app.post('/sales/products', async (req: Request, res: Response) => {
  try {
    const pageIndex = parseInt(req.body.pageIndex as string) || 1;
    const limit = parseInt(req.body.pageSize as string) || 10;
    const offset = (pageIndex - 1) * limit;
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

    const [skuList] = rows.map(row => row.sku);
    console.log(skuList)
    let status = 1
    if(skuList > 15){
      status = 0
    }
    else if(skuList >= 1){
      status = 1
    }
    else{
      status = 2
    }

    const [totalRows] = await pool.query<RowDataPacket[]>(
      'SELECT COUNT(*) as total FROM products' + (query ? ' WHERE product_name LIKE ?' : ''),
      query ? [`%${query}%`] : []
    );
    const total = totalRows[0].total;

    res.json({
      products: rows,
      status,
      total,
      pageIndex,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database query failed' });
  }
});


app.delete("/sales/product/delete", async(req:Request, res:Response)=>{
  console.log(req.body)
  try{
    const userId = req.body.product_id;
    const [DeletedProduct] = await pool.query(
      'DELETE FROM products WHERE product_id = ? ',
      [userId]
    );
  
    if((DeletedProduct as any).affectedRows > 0){
      res.status(200).json({
        message: 'Product Deleted Successfully'
      })
    }
    else{
      res.status(400).json({
        message : 'Product Not found'
      })
    }
  }
  catch(err){

    res.status(500).json({
      message: 'An error occured while deleting the product'
    })
  }

})	

app.post('/sales/product/create', async(req, res)=>{
  const {
    product_name,
    code,
    categories,
    price,
    sku,
    bulk_dp,
    taxRate,
    tags,
    brand,
    vendor,
    description,
  } = req.body;

  let tag_id = 1
  if(tags === "trend"){
    tag_id = 1
  }else{
    tag_id = 2
  }

  const [cat] = await pool.query<RowDataPacket[]>(
    `SELECT category_id from categories WHERE categories = ?`,
    [categories]
  )
  const category_id = cat.map((id)=>id.category_id)[0];

  try{
    console.log("try started")
    const [skuResult] = await pool.query(
      `INSERT INTO sku (sku, price, bulk_dp, taxrate) VALUES (?, ?, ?, ?)`,
      [sku, price, bulk_dp, taxRate]
    )
    console.log("1st query")
    const skuId = (skuResult as any).insertId;

    const [orgResult] = await pool.query(
      `INSERT INTO organizations (tag_id, category_id, brand, vendor) VALUES (?, ?, ?, ?)`,
      [tag_id, category_id, brand, vendor] 
    );
    const organizationId = (orgResult as any).insertId;
    console.log(organizationId)
    await pool.query(
      `INSERT INTO products (product_name, organization_id, sku_id, code, description, created_date, updated_date) 
      VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
      [product_name, organizationId, skuId, code, description]
    );
    console.log("last query")

    res.json(201)
  }
  catch(err){
    res.status(500).json({message: "Error creating product"})
  }
  
})

app.get('/sales/product',async(req, res)=>{
  const id = req.query.id

  const [data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM products WHERE product_id = ?`,
    [id]
  )

  const { product_id, product_name, code, organization_id, sku_id, description } = data[0];

  const [org_data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM organizations WHERE org_id = ?`,
    [organization_id]
  )
  const {brand, vendor} = org_data[0];

  const { category_id, tag_id} = org_data[0]

  const [category_data] = await pool.query<RowDataPacket[]>(
    `SELECT categories FROM categories WHERE category_id = ?`,
    [category_id]
  )
  const {categories} = category_data[0];

  const tag_data = await pool.query<RowDataPacket[]>(
    `SELECT tags FROM tags WHERE tags_id = ?`,
    [tag_id]
  )
  const tags = tag_data[0];

  const [sku_data] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM sku WHERE sku_id = ?`,
    [sku_id]
  )
  const {price, sku, bulk_dp, taxrate} = sku_data[0]

  // console.log(product_name, code, categories, price, brand, vendor, tags, description, bulk_dp, sku);



  res.status(200).json({
    product_id,
    product_name, 
    code, 
    categories, 
    price, 
    brand, 
    vendor, 
    tags, 
    description, 
    bulk_dp, 
    sku,
    taxrate
  })
})

app.put('/sales/products/update', async(req, res)=>{

  const {product_name, code, description, product_id, categories, price, brand, vendor, sku, bulk_dp, taxrate} = req.body

  try{
    const updatedProd = await pool.query(
      `UPDATE products
      SET product_name = ?, code = ?, description = ? 
      WHERE product_id = ?
      `,
      [product_name, code, description, product_id]
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
      [price, sku, bulk_dp, taxrate, sku_id]
    )
    res.status(201).json({
      message: "Product Updated Successfully"
    })
  }
  catch(err){
    res.status(500).json({
      err
    })
  }
})
app.listen(3000);

