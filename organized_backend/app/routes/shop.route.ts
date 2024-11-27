import express  from "express";
import { allCategory, allProductList, allSubCategory, categoryList, shopNewProduct, subCategoryList } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)
router.post('/subcategory', allSubCategory)
router.get('/categorylist',categoryList)
router.post('/subcategorylist', subCategoryList)
router.post('/productlist', allProductList)
router.post('/newproduct', shopNewProduct)

export default router