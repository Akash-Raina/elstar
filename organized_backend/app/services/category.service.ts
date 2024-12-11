import { Request } from "express";
import pool from "../utils/mysql";
import { RowDataPacket } from "mysql2";
import { pagination } from "../utils/pagination";
import json2csv, { Parser } from 'json2csv'

const fetchAllCategory = async (req:Request)=>{


    const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)
    const query = req.body.query

    let sqlQuery = `SELECT category_name, status, id FROM category `

    const sqlParams: (string | number)[] = [];
    if(query){
        sqlQuery += `WHERE category.category_name REGEXP ?`
        sqlParams.push(`^${query}`);
    }

    sqlQuery += 'LIMIT ? OFFSET ?';
    sqlParams.push(limit, offset)
    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM category`
    )
    
    const total = totalRows[0].total;

    let brand_value:Record<string, any> = {}

    const [categoryData] = await pool.query<RowDataPacket[]>(sqlQuery, sqlParams);

    for(let i = 0; i  < categoryData.length; i++){
        let id = categoryData[i].id
        const [brandName] = await pool.query<RowDataPacket[]>(
            `SELECT category_name AS brand, status FROM category
                where id = ?`,[id]
        )
    
        const [totalBrand] = await pool.query<RowDataPacket[]>(
            `SELECT COUNT(*) AS value FROM sub_category
                WHERE category_id = ?`,[id]
        )
        const store_brand = brandName[0].brand
        const store_value = totalBrand[0].value
        brand_value[store_brand] =  store_value
    }

    for(let i = 0; i < categoryData.length; i++){
        const store = categoryData[i].category_name

        if(store in brand_value){
            categoryData[i].brand = brand_value[store]
        }
    }

    return {
        categoryData,
        total,
    };

    
}   

const fetchSubCategory = async (req: Request)=>{
    if(!req.query.id){
        throw new Error("no id found in query")
    }
    const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)
    const query = req.body.query
    const category_id = req.query.id;

    let sqlQuery = `
    SELECT sub_category_name, status, id 
    FROM sub_category
    WHERE category_id = ? `
    const sqlParams:(string| number)[] = [];
    sqlParams.push(`${category_id}`)
    if(query){
        sqlQuery += `AND sub_category.sub_category_name REGEXP ? `

        sqlParams.push(`^${query}`)
    }

    sqlQuery += 'LIMIT ? OFFSET ?';
    sqlParams.push(limit, offset)

    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM sub_category
            WHERE category_id = ?`, [category_id]
    )
    
    const total = totalRows[0].total;

    let product_value:Record<string, any> = {}

        const [productName] = await pool.query<RowDataPacket[]>(
            `SELECT sub_category_name AS product, id FROM sub_category
                where category_id = ?`,[category_id]
        )
        
    for(let i = 0; i < productName.length; i++){
        let id = productName[i].id
        const [totalProduct] = await pool.query<RowDataPacket[]>(
            `SELECT COUNT(*) AS value FROM product
                WHERE sub_category_id = ?`,[id]
        )

        const store_brand = (productName[i].product) as string
        const store_value = totalProduct[0].value
        product_value[store_brand] =  store_value
    }

    const [subCategory] = await pool.query<RowDataPacket[]>(
        sqlQuery, sqlParams
    )

    for(let i = 0; i < subCategory.length; i++){
        const store = subCategory[i].sub_category_name

        if(store in product_value){
            subCategory[i].products = product_value[store]
        }
    }


    return {
        data: subCategory,
        total
    }
}

const fetchCategoryList = async (req: Request)=>{
    const [allCategory] = await pool.query<RowDataPacket[]>(
       ` SELECT category_name AS label, id AS value FROM category`
    )

    return allCategory
}

const fetchSubCategoryList = async (req: Request)=>{

    const cat_id = req.body.category_id;
    if(!cat_id){
        throw new Error("no id found")
    }

    const [allCategory] = await pool.query<RowDataPacket[]>(
        ` SELECT sub_category_name AS label, id AS value FROM sub_category
            WHERE category_id = ?`,[cat_id]
    )

    return allCategory
}

const fetchCategoryStatus = async(req: Request)=>{
    const id = req.body.id

    if(!id){
        throw new Error("no id found in query")
    }

    const [status] = await pool.query<RowDataPacket[]>(
        `
        SELECT status FROM category
        WHERE id = ?
        `,
        [id]
    )

    return status[0]
}

const fetchAllProducts = async (req: Request) => {
    if (!req.query.id) {
        throw new Error("no id found in query");
    }
    const sub_category_id = req.query.id;

    let sqlQuery = `
        SELECT 
            product.product_name, 
            product.status, 
            product.id,
            product.img, 
            product.sku_id,
            sku_table.price, 
            sku_table.tax, 
            sku_table.discount, 
            sku_table.sku, 
            sku_table.unit
        FROM 
            product
        LEFT JOIN 
            sku_table
        ON 
            product.sku_id = sku_table.id
        WHERE 
            product.sub_category_id = ? 
    `;

    const sqlParams: (string | any)[] = [];

    const { limit, offset } = pagination(req.body.pageIndex, req.body.pageSize);
    const query = req.body.query;
    sqlParams.push(sub_category_id);

    if (query) {
        sqlQuery += `AND product.product_name LIKE ? `;
        sqlParams.push(`%${query}%`);
    }

    sqlQuery += `LIMIT ? OFFSET ?`;
    sqlParams.push(limit, offset);

    // Total row count query
    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM product 
         WHERE sub_category_id = ?`,
        [sub_category_id]
    );
    const total = totalRows[0].total;

    // Main product query
    const [products] = await pool.query<RowDataPacket[]>(sqlQuery, sqlParams);

    return {
        data: products,
        total,
    };
};

const storeNewProduct = async(req: Request)=>{

    if(!req.body) throw new Error
    console.log("body", req.body.url)
    const {
        product_name,
        sub_category,
        status,
        price, 
        sku,
        discount,
        tax,
        url
    } = req.body;

    const sub_category_id = sub_category.value

    const [newProduct] = await pool.query<RowDataPacket[]>(
        `INSERT INTO product (product_name, sub_category_id, created_date, updated_date, status, img) 
        VALUES 
        (?, ?, now(), now(), ?, ?)`,[product_name, sub_category_id, status, url]
    ) 
    const productId = (newProduct as any).insertId  
    console.log("id, sku", productId, sku)
    const [newSku] = await pool.query<RowDataPacket[]>(
        `INSERT INTO sku_table (product_id, sku, unit, price, tax, discount)
        VALUES
        (?, ?, ?, ?, ?,?)
        `, [productId, sku, 10, price, tax, discount]
    )

    const skuId = (newSku as any).insertId

    await pool.query<RowDataPacket[]>(
        `UPDATE product SET sku_id = ? WHERE id = ?`,
        [skuId, productId]
    )
    
    return
}

const storeNewCategory = async(req: Request)=>{

    const {
        category_name,
    } = req.body;

    const status = 2;

    await pool.query<RowDataPacket[]>(
        `INSERT INTO category (category_name, created_date, updated_date, status)
        VALUES
        (?, now(), now(), ?)`, 
        [category_name, status]
    )

    return
}

const storeNewSubCategory = async(req: Request)=>{

    const {
        sub_category_name,
        category_id,
    } = req.body

    const status = 0

    await pool.query<RowDataPacket[]>(
        `INSERT INTO sub_category (category_id, sub_category_name, created_date, updated_date, status)
        VALUES
        (?, ?, now(), now(), ?)`,
        [category_id, sub_category_name, status]
    )
}

const deleteShopProduct = async(req: Request)=>{
    const {
        product_id
    } = req.body
    await pool.query<RowDataPacket[]>(
        `UPDATE product SET status = 1 WHERE id = ?`,[product_id]
    )
}

const fetchOneProduct = async(req: Request)=>{

    const product_id = req.body.id;

    const [result] = await pool.query<RowDataPacket[]>(
    `
    SELECT 
        p.id,
        p.product_name, 
        p.sub_category_id, 
        p.status, 
        p.img,
        p.sku_id, 
        sc.sub_category_name, 
        sc.category_id, 
        c.category_name
    FROM 
        product p
    JOIN 
        sub_category sc ON p.sub_category_id = sc.id
    JOIN 
        category c ON sc.category_id = c.id
    WHERE 
        p.id = ?
    `,
    [product_id]
    );

    const category = { value: result[0].category_id, 
        label: result[0].category_name
    }

    const sub_category = {
        value: result[0].sub_category_id,
        label: result[0].sub_category_name
    }

    const img = result[0].img 

    const imgList = [{
        id: 'img-001',
        name: 'img-01',
        url: img,
        img: {}
    }]

    const skuIds = result[0].sku_id.split(',');
    if(skuIds){

        const [skuDetails] = await pool.query<RowDataPacket[]>(
            `SELECT price, tax, discount, sku, unit 
             FROM sku_table 
             WHERE id IN (?)`, 
            [skuIds]
        );

        const all = {
            ...result[0],
            imgList,
            ...skuDetails[0],
            category,
            sub_category
        }
        
        return all
    }


    return {
        ...[result][0],
        imgList,
        category,
        sub_category
    }
}

const updateProductById = async(req: Request)=>{

    const {
        id,
        product_name, 
        price,
        discount,
        sku,
        status,
        sku_id,
        category,
        sub_category
    } = req.body;
    
    const [updateProduct] = await pool.query<RowDataPacket[]>(
        `
        UPDATE product  
        SET product_name = ?, sub_category_id = ?, status = ?
        WHERE id = ?
    `,
    [product_name, sub_category.value, status, id]
    )

    const [updateSub] = await pool.query<RowDataPacket[]>(
        `
    UPDATE sub_category
    SET category_id = ? 
    WHERE id = ?`,  
    [category.value, sub_category.value]);


    const [updateSku] = await pool.query<RowDataPacket[]>(
        `
        UPDATE sku_table
        SET price = ?, discount = ?, sku = ?
        WHERE id = ?
        `,
        [price, discount, sku, sku_id[0]]
    )

    return
    
}

const updateCategoryById = async(req: Request)=>{

    if(!req.body) throw new Error

    // id - > 1, category_name: testing

    const {id, category_name, status} = req.body;

    await pool.query<RowDataPacket[]>(
        `
        UPDATE category SET category_name = ?, status = ?
        WHERE id = ?
        `,
        [category_name, status, id]
    )

    return 
}

const fetchCategoryById = async(req: Request)=>{

    if(!req.body) throw new Error 

    const {id} = req.body

    const [name] = await pool.query<RowDataPacket[]>(
        `
        SELECT id, category_name, status from category
        WHERE id = ?
        `,
        [id]
    )

    return name[0]
}

const fetchSubCategoryById = async(req: Request)=>{

    if(!req.body.id) throw new Error 

    const id = req.body.id

    const [name] = await pool.query<RowDataPacket[]>(`
       SELECT 
        sc.id,
        sc.status,
        sc.sub_category_name,   
        sc.category_id, 
        c.category_name
    FROM 
        sub_category sc
    JOIN 
        category c ON sc.category_id = c.id
    WHERE 
        sc.id = ?
    `,
    [id])

    const category = { value: name[0].category_id, 
        label: name[0].category_name
    }

    const all = {
        ...name[0],
        category
    }

    return all
}

const updateSubCatgoryById = async(req: Request)=>{

    if(!req.body) throw new Error

    const {
        id, 
        sub_category_name,
        category,
        status
    } = req.body

    const category_id = category.value 

    await pool.query<RowDataPacket[]>(
        `
        UPDATE sub_category SET category_id = ?, sub_category_name = ?, status = ? 
            WHERE id = ?
        `,
        [category_id, sub_category_name, status, id])

    return
}

const deletCategoryById = async(req: Request)=>{

    if(!req.body) throw new Error
    const {id} = req.body
    await pool.query<RowDataPacket[]>(
        `UPDATE category SET status = 1 WHERE id = ?`,[id]
    )

    return
}

const deletSubCategoryById = async(req: Request)=>{

    if(!req.body) throw new Error
    const {id} = req.body
    await pool.query<RowDataPacket[]>(
        `UPDATE sub_category SET status = 1 WHERE id = ?`,[id]
    )

    return
}

type ExportType = 'category' | 'subcategory' | 'product';
type FieldMap = Record<ExportType, string[]>;

const FIELD_MAP: FieldMap = {
    category: ['category_name', 'status', 'id', 'brand'],
    subcategory: ['sub_category_name', 'status', 'id', 'brand'],
    product: ['product_name', 'price', 'id', 'status', 'sku_id', 'tax', 'discount', 'sku', 'unit'],
};

const exportList = async(req: Request)=>{

    const type:ExportType = req.body.type;
    const data = req.body.data;

    if (!type || !FIELD_MAP[type]) {
        throw new Error(`Invalid type provided: ${type}`);
    }
    const fields = FIELD_MAP[type];
    const json2csvParser = new Parser({ fields });
    try {
        const csv = json2csvParser.parse(data);
        return csv;
    } catch (error) {
        console.error('Error generating CSV:', error);
        throw new Error('Failed to generate CSV');
    }
}

export {
    fetchAllCategory,
    fetchSubCategory,
    fetchCategoryList,
    fetchSubCategoryList,
    fetchAllProducts,
    storeNewProduct,
    storeNewCategory,
    storeNewSubCategory,
    deleteShopProduct,
    fetchOneProduct,
    updateProductById,
    updateCategoryById,
    fetchCategoryById,
    fetchSubCategoryById,
    updateSubCatgoryById,
    fetchCategoryStatus,
    deletCategoryById,
    deletSubCategoryById,
    exportList
}