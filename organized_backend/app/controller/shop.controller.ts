import { Request, Response } from "express";
import { fetchAllCategory, fetchAllProducts, fetchCategoryList, fetchSubCategory, fetchSubCategoryList } from "../services/category.service";

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

export{
    allCategory,
    allSubCategory,
    categoryList,
    subCategoryList,
    allProductList
} 