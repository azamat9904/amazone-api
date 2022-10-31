import { Router } from 'express'
import userController from '../controllers/user'

const router = Router()

router.post('/sign-up', userController.saveUser)

export default router
