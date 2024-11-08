import express from 'express'
import {singleProduct, allProducts, createProduct, deleteProduct, editProduct, uploadToS3} from '../controller/sales.controller'
const router = express.Router()

router.post('/products', allProducts)
router.get('/product', singleProduct)
router.post('/product/create', createProduct)
router.delete('/product/delete',deleteProduct)
router.put('/products/update', editProduct)
router.post('/product/getimageurl', uploadToS3)


export default router