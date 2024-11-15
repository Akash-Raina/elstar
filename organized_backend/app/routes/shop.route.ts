import express  from "express";
import { allCategory, allSubCategory } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)
router.post('/subcategory', allSubCategory)

export default router