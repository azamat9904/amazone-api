import express, { Express } from 'express'
import { connectToDB } from './core/db'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import productRoutes from './routes/product'
import userRoutes from './routes/user'

const app: Express = express()
const port = process.env.PORT

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/auth', userRoutes)
app.use('/products', productRoutes)

//server
connectToDB().then(() => {
    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at https://localhost:${port}`
        )
    })
})
