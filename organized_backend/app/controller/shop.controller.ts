import { Request, Response } from "express";
import { fetchAllCategory } from "../services/category.service";

const allCategory = async(req:Request, res:Response)=>{

    try{
        const data = await fetchAllCategory(req);
        console.log(data)
        res.status(200).json({
            data
        })
    }
    catch(err){
        res.status(500).json({
            err
        })
    }

}

export{
    allCategory
} 