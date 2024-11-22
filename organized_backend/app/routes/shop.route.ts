import express  from "express";
import { allCategory, allProductList, allSubCategory, categoryList, subCategoryList } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)
router.post('/subcategory', allSubCategory)
router.get('/categorylist',categoryList)
router.get('/subcategorylist', subCategoryList)
router.post('/productlist', allProductList)

export default router