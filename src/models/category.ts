import { Schema, model } from 'mongoose'

interface ICategory {
    type: string
}

const categorySchema = new Schema<ICategory>({
    type: { type: String, unique: true, required: true },
})

export default model<ICategory>('Category', categorySchema)
