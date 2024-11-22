import { Request } from "express";
import pool from "../utils/mysql";
import { RowDataPacket } from "mysql2";
import { pagination } from "../utils/pagination";

const fetchAllCategory = async (req:Request)=>{

    const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)

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


    const sqlQuery = `SELECT category_name, status, id FROM category LIMIT ?, ? `
    
    const [categoryData] = await pool.query<RowDataPacket[]>(sqlQuery, [offset, limit]);

    for(let i = 0; i < total; i++){
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
    const category_id = req.query.id;

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

    const sqlQuery = `
        SELECT sub_category_name, status, id 
        FROM sub_category
        WHERE category_id = ? LIMIT ?, ?
    `
    const [subCategory] = await pool.query<RowDataPacket[]>(
        sqlQuery, [category_id, offset, limit]
    )

    for(let i = 0; i < total; i++){
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
    console.log("cat_id",cat_id)
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
    
    const {limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)
    

    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM product 
            WHERE sub_category_id = ?`, [sub_category_id]
    )
    
    const total = totalRows[0].total;

    const sqlQuery = `
        SELECT product_name, status, id, sku_id     
        FROM product
        WHERE sub_category_id = ? LIMIT ?, ?
    `
    const [products] = await pool.query<RowDataPacket[]>(
        sqlQuery, [sub_category_id, offset, limit]
    )
    console.log("products -> ", products)
    return {
        data: products,
        total,
    }
}

export {
    fetchAllCategory,
    fetchSubCategory,
    fetchCategoryList,
    fetchSubCategoryList,
    fetchAllProducts
}