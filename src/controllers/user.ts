import UserModel from '../models/user'
import { Request, Response } from 'express'
import { IUser } from '../models/user'

class UserController {
    async saveUser(req: Request, res: Response) {
        try {
            const user: IUser = req.body
            const userModel = new UserModel({
                email: user.email,
                password: user.password,
                name: user.name,
            })
            const savedUser = await userModel.save()

            res.json({
                message: 'Пользователь успешно создан',
                user: savedUser,
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Не удалось создать пользователя',
            })
        }
    }
}

export default new UserController()
