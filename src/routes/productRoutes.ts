import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/productController';
const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', addProduct)
router.put('/:id',updateProduct)
router.delete('/:id', deleteProduct)

export default router;