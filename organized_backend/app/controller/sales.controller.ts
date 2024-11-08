import { Request, Response } from "express";
import {getAllProducts, getSingleProduct, newProduct, eraseProduct, updateProduct, hitS3Api} from "../services/product.services"


const allProducts = async (req:Request, res: Response)=> {
    
    try{
        const {
            products, 
            status, 
            total, 
            pageIndex,
            totalPages
        } = await getAllProducts(req)

        res.status(200).json({
            products, 
            status, 
            total, 
            pageIndex, 
            totalPages
        })
    }
    catch(error){
        res.status(500).json({ error: "Database query failed" });
    }
}

const singleProduct = async (req:Request, res: Response)=> {
    
    const {
        product_id,
        product_name,
        code,
        categories,
        price,
        brand,
        vendor,
        tags,
        url,
        description,
        bulk_dp,
        sku,
        imgList,
        taxrate,
    } = await getSingleProduct(req);

    res.status(200).json({
        product_id,
        product_name,
        code,
        categories,
        price,
        brand,
        vendor,
        tags,
        url,
        imgList,
        description,
        bulk_dp,
        sku,
        taxrate,
      });
}

const createProduct =  async(req:Request, res: Response) => {
    try{
        const data = await newProduct(req);
        res.status(201).send({msg: "success"})
    }
    catch(error){
        res.status(500).json({ message: "Error creating product" });
    }
    
}

const deleteProduct = async(req: Request, res: Response) => {
    try{
        const data = await eraseProduct(req);
        if((data as any).affectedRows > 0){
            res.status(200).json({
                message: "Product deleted successfully",
            });
        }
        else{
            res.status(400).json({
                message : 'Product Not found'
              })
        }
    }
    catch(error){
        res.status(500).json({
            message: "An error occured while deleting the product",
          });
    }
    
}

const editProduct = async(req: Request, res: Response) =>{

    try{
        await updateProduct(req);
        res.status(201).json({
            message: "Product Updated Successfully"
          })
    }
    catch(error){
        res.status(500).json({
            error
        })
    }
}

const uploadToS3 = async (req: Request, res: Response) => {
    try {
      const { response, fileUrl } = await hitS3Api(req); 
  
      res.status(200).json({
        message: "File uploaded successfully",
        fileUrl: fileUrl, 
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({
        error: error || "Something went wrong",
      });
    }
  };


export  {
    allProducts,
    createProduct,
    singleProduct,
    deleteProduct,
    editProduct,
    uploadToS3
}