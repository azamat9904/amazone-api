import { Schema, Types, model } from 'mongoose'

export interface IUser {
    name: string
    email: string
    password: string
}

interface IUserSchema extends IUser {
    address: Types.ObjectId
}

const userSchema = new Schema<IUserSchema>({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: 'Address' },
})

export default model<IUserSchema>('User', userSchema)
