import express from "express";
import salesRouter from './sales.route'
import shopRouter from './shop.route'

const router = express.Router()

router.use('/sales', salesRouter);
router.use('/shop', shopRouter)

export default router