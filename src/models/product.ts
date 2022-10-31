import { Schema, Types, model } from 'mongoose'

interface IProduct {
    category: Types.ObjectId
    owner: Types.ObjectId
    title: string
    description: string
    photo: string
    stockQuantity: number
    rating: number
}

const productSchema = new Schema<IProduct>({
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    title: String,
    photo: String,
    stockQuantity: Number,
    rating: Number,
})

export default model<IProduct>('Product', productSchema)
