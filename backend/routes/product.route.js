import express from 'express';
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/product.controller.js';

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET single product by ID
router.get('/:id', getProductById);

// POST create a product
router.post('/', createProduct);

// PUT update a product
router.put('/:id', updateProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

export default router;
