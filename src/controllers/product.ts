import ProductModel, { IProduct } from '../models/product'
import { Request, Response } from 'express'

interface MulterFile {
    file: any
}

class ProductController {
    async addProduct(req: Request, res: Response) {
        try {
            const product: IProduct = req.body
            const photo = (req as MulterFile).file.location

            const productModel = new ProductModel({
                title: product.title,
                description: product.description,
                stockQuantity: product.stockQuantity,
                photo,
            })

            await productModel.save()

            res.json({
                success: true,
                message: 'Продукт успешно создан',
            })
        } catch (e: any) {
            console.error(e)
            res.status(500).json({
                message: 'Не удалось добавить продукт - ' + e.message,
            })
        }
    }

    async getProducts(req: Request, res: Response) {
        try {
            const products = await ProductModel.find({})
            res.json({
                products,
            })
        } catch (e: any) {
            console.error(e)
            res.status(500).json({
                message: 'Не удалось получить список продуктов - ' + e.message,
            })
        }
    }
}

export const productController = new ProductController()
