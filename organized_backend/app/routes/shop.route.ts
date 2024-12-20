import express  from "express";
import { allCategory, allProductList, allSubCategory, callOnExport, categoryList, deleteCategory, deleteSubCategory, getCategoryById, getCategoryStatus, getProduct, getSubCategoryByid, recieveExcelCategory, removeProduct, shopNewCategory, shopNewProduct, shopNewSubCategory, subCategoryList, updateSingleCategory, updateSingleProduct, updateSingleSubCategory } from "../controller/shop.controller";

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
router.put('/updatecategory', updateSingleCategory)
router.post('/getcategory', getCategoryById)
router.post('/getsubcategory', getSubCategoryByid)
router.put('/updatesubcategory',updateSingleSubCategory)
router.post('/getcategorystatus', getCategoryStatus)
router.delete('/deletecategorybyid', deleteCategory)
router.delete('/deletesubcategorybyid', deleteSubCategory)
router.post('/downloadlist', callOnExport)
router.post('/importcategory', recieveExcelCategory)


export default router