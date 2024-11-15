import { Request } from "express";
import pool from "../utils/mysql";
import { RowDataPacket } from "mysql2";

const fetchAllCategory = async (req:Request)=>{

    const pageIndex = parseInt(req.body.pageIndex as string) || 1;
    const limit = parseInt(req.body.pageSize as string) || 10;
    const offset = (pageIndex - 1) * limit;

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

    if(!req.query.id){
        throw new Error("no id found in query")
    }
    const category_id = req.query.id;

    const sqlQuery = `
        SELECT sub_category_name, status, id 
        FROM sub_category
        WHERE category_id = ?
    `
    const [subCategory] = await pool.query<RowDataPacket[]>(
        sqlQuery, [category_id]
    )
    return subCategory
}
export {
    fetchAllCategory,
    fetchSubCategory
}