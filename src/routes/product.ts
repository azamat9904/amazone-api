import { Router } from 'express'
import { productController } from '../controllers/product'
import { upload } from '../middleware/upload'

const router = Router()

router.post('/', upload.single('photo'), productController.addProduct)
router.get('/', productController.getProducts)
export default router
