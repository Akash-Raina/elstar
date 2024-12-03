import express  from "express";
import { allCategory, allProductList, allSubCategory, categoryList, getProduct, removeProduct, shopNewCategory, shopNewProduct, shopNewSubCategory, subCategoryList, updateSingleProduct } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)
router.post('/subcategory', allSubCategory)
router.get('/categorylist',categoryList)
router.post('/subcategorylist', subCategoryList)
router.post('/productlist', allProductList)
router.post('/newproduct', shopNewProduct)
router.post('/newcategory', shopNewCategory)
router.post('/newsubcategory', shopNewSubCategory)
router.delete('/deleteproduct', removeProduct)
router.post('/getproduct', getProduct)
router.put('/updateproduct', updateSingleProduct)

export default router