import { Request } from "express";
import pool from "../utils/mysql";
import { RowDataPacket } from "mysql2";

const fetchAllCategory = async (req:Request)=>{

    const pageIndex = parseInt(req.body.pageIndex as string) || 1;
    const limit = parseInt(req.body.pageSize as string) || 10;
    const offset = (pageIndex - 1) * limit;

    const sqlQuery = `SELECT category_name, status FROM category LIMIT ?, ? `
    
    const [categoryData] = await pool.query<RowDataPacket[]>(sqlQuery, [offset, limit]);
        
    return categoryData;

    
}   

export {
    fetchAllCategory
}