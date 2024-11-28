import { Request } from "express";
import pool from "../utils/mysql";
import { RowDataPacket } from "mysql2";
import { pagination } from "../utils/pagination";
import formidable, { Fields, Files } from "formidable";

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

    for(let id = 1; id <= total; id++){
        const [brandName] = await pool.query<RowDataPacket[]>(
            `SELECT category_name AS brand FROM category
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



    
    const [categoryData] = await pool.query<RowDataPacket[]>(sqlQuery, sqlParams);

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


    console.log("Product + value",product_value)

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


const fetchAllProducts = async(req: Request)=>{
    if(!req.query.id){
        throw new Error("no id found in query")
    }
    const sub_category_id = req.query.id;

    let sqlQuery = `
    SELECT product_name, status, id, sku_id     
    FROM product
    WHERE sub_category_id = ? `
    const sqlParams:(string  | any)[] = [] 

    const {limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)
    const query = req.body.query
    sqlParams.push(sub_category_id)

    if(query){
        sqlQuery += `AND product.product_name REGEXP ? `;
        sqlParams.push(`^${query}`)
    }

    sqlQuery += `LIMIT ? OFFSET ?`;
    sqlParams.push(limit, offset)

    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM product 
            WHERE sub_category_id = ?`, [sub_category_id]
    )
    
    const total = totalRows[0].total;


    const [products] = await pool.query<RowDataPacket[]>(sqlQuery, sqlParams)
    console.log("products -> ", products)
    return {
        data: products,
        total,
    }
}

const storeNewProduct = async(req: Request)=>{

    if(!req.body) throw new Error

    const {
        product_name,
        sub_category,
        status,
        price, 
        sku,
        bulk_dp,
        taxRate
    } = req.body;
    console.log("product name", product_name)
    const sub_category_id = sub_category.value

    const [newProduct] = await pool.query<RowDataPacket[]>(
        `INSERT INTO product (product_name, sub_category_id, created_date, updated_date, status) 
        VALUES 
        (?, ?, now(), now(), ?)`,[product_name, sub_category_id, status]
    ) 
    const productId = (newProduct as any).insertId  

    const [newSku] = await pool.query<RowDataPacket[]>(
        `INSERT INTO sku_table (product_id, unit, price, tax, discount)
        VALUES
        (?, ?, ?, ? , ?)
        `, [productId, sku, price, taxRate, bulk_dp]
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
export {
    fetchAllCategory,
    fetchSubCategory,
    fetchCategoryList,
    fetchSubCategoryList,
    fetchAllProducts,
    storeNewProduct,
    storeNewCategory,
    storeNewSubCategory
}