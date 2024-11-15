import { Request, Response } from "express";
import { fetchAllCategory, fetchSubCategory } from "../services/category.service";

const allCategory = async(req:Request, res:Response)=>{

    try{
        const {categoryData, total} = await fetchAllCategory(req);
        res.status(200).json({
            data: categoryData,
            total
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
        const data = await fetchSubCategory(req)

        res.status(200).json({
            msg: "Data fetched Succesfully",
            data
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
    allSubCategory
} 