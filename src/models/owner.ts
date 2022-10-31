import { Schema, model } from 'mongoose'

interface IOwner {
    name: string
    about: string
    photo: string
}

const ownerSchema = new Schema<IOwner>({
    name: String,
    about: String,
    photo: String,
})

export default model<IOwner>('Owner', ownerSchema)
