import express from "express";
import salesRouter from './sales.route'

const router = express.Router()

router.use('/sales', salesRouter)

export default router