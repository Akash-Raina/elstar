import { RowDataPacket } from "mysql2";
import { Request } from "express";
import multer from "multer"

export interface Product extends RowDataPacket {
    id: number;
    img: string;
    product_name: string;
    price: number;
    category: string;
    sku: number;
    status: number;
    created_date: Date;
    updated_date: Date;
  }

  export interface imgList{
    img: File,
    id: string,
    name: string,
    url: string
  }

  interface MulterRequest extends Request {
    file?: Express.Multer.File;
  }

