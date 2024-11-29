import { Request, Response } from "express";
import { deleteShopProduct, fetchAllCategory, fetchAllProducts, fetchCategoryList, fetchSubCategory, fetchSubCategoryList, storeNewCategory, storeNewProduct, storeNewSubCategory } from "../services/category.service";

const allCategory = async(req:Request, res:Response)=>{

    try{
        const {categoryData, total} = await fetchAllCategory(req);
        res.status(200).json({
            data: categoryData,
            total,
            
        })
    }
    catch(err){
        res.status(500).json({
            err
        })
    }

}

const allSubCategory = async(req: Request, res:Response)=>{
    try{
        const {data, total} = await fetchSubCategory(req)

        res.status(200).json({
            msg: "Data fetched Succesfully",
            data,
            total
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
    
}

const categoryList = async(req:Request, res:Response)=>{
    try{
        const data = await fetchCategoryList(req);

        res.status(200).json({
            data
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

const subCategoryList = async(req:Request, res:Response)=>{
    try{
        const data = await fetchSubCategoryList(req);

        res.status(200).json({
            data
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

const allProductList = async(req: Request, res: Response)=>{
    try{
        const {data, total} = await fetchAllProducts(req);
        res.status(200).json({
            msg: 'Products fetched successfully',
            data,
            total
        })
    }
    catch(err){
        res.status(400).json({
            msg: err
        })
    }
}

const shopNewProduct = async(req: Request, res: Response)=>{
    try{
        await storeNewProduct(req);
        res.status(201).json({
            msg: "Product Created successfully"
        })
    }
    catch(err){
        res.status(500).json({
            msg: err
        })
    }
    
    
}

const shopNewCategory = async(req: Request, res: Response)=>{
    try{
        await storeNewCategory(req);
        res.status(201).json({
            msg: 'Category Created Successfully'
        })
    }
    catch(err){
        res.status(500).json({
            msg: err
        })
    }
}

const shopNewSubCategory = async(req: Request, res: Response)=>{
    try{
        await storeNewSubCategory(req);
        res.status(201).json({
            msg: 'Sub Category created Successfully'
        })
    }
    catch(err){
        msg: err
    }
}

const removeProduct = async(req: Request, res: Response)=>{
    try{
        await deleteShopProduct(req);
        res.status(200).json({
            msg: "Product Deleted Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            msg: err
        })
    }
}

export{
    allCategory,
    allSubCategory,
    categoryList,
    subCategoryList,
    allProductList,
    shopNewProduct,
    shopNewCategory,
    shopNewSubCategory,
    removeProduct
} 