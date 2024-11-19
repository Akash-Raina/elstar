import express  from "express";
import { allCategory, allProductList, allSubCategory } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)
router.post('/subcategory', allSubCategory)
router.post('/productlist', allProductList)

export default router