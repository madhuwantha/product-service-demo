import { Request, Response } from "express";
import Product, {IProduct} from "../models/Product";

export const addProduct = async (req: Request, res: Response) => {
    const product: IProduct = req.body;    
    const newProduct = new Product(product);
    try {
        await Product.create(newProduct);
        res.json({
            message: 'Product created',
            data: newProduct
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error creating product',
            error
        })
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.json({
            message: 'Products fetched',
            data: products
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error fetching products',
            error
        })
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.json({
            message: 'Product fetched',
            data: product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error fetching product',
            error
        })
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    const product: IProduct = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.json({
            message: 'Product updated',
            data: updatedProduct
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating product',
            error
        })
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.json({
            message: 'Product deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error deleting product',
            error
        })
    }
};