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

    const sqlQuery = `SELECT category_name, status, id FROM category LIMIT ?, ? `
    
    const [categoryData] = await pool.query<RowDataPacket[]>(sqlQuery, [offset, limit]);
        
    return {
        categoryData,
        total
    };

    
}   

const fetchSubCategory = async (req: Request)=>{
    console.log(req.body)
    if(!req.query.id){
        throw new Error("no id found in query")
    }
    const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)

    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM sub_category`
    )
    
    const total = totalRows[0].total;
    const category_id = req.query.id;

    const sqlQuery = `
        SELECT sub_category_name, status, id 
        FROM sub_category
        WHERE category_id = ? LIMIT ?, ?
    `
    const [subCategory] = await pool.query<RowDataPacket[]>(
        sqlQuery, [category_id, offset, limit]
    )
    return {
        data: subCategory,
        total
    }
}

const fetchAllProducts = async(req: Request)=>{
    console.log(req.body)
    if(!req.query.id){
        throw new Error("no id found in query")
    }
    const {pageIndex, limit, offset } = pagination(req.body.pageIndex, req.body.pageSize)

    const [totalRows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM product`
    )
    
    const total = totalRows[0].total;
    const product_id = req.query.id;

    const sqlQuery = `
        SELECT product_name, status, id 
        FROM product
        WHERE id = ? LIMIT ?, ?
    `
    const [products] = await pool.query<RowDataPacket[]>(
        sqlQuery, [product_id, offset, limit]
    )
    return {
        data: products,
        total
    }
}

export {
    fetchAllCategory,
    fetchSubCategory,
    fetchAllProducts
}