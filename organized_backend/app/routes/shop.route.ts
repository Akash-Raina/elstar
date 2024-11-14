import express  from "express";
import { allCategory } from "../controller/shop.controller";

const router = express.Router()

router.post('/allcategory', allCategory)

export default router