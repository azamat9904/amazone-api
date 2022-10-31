import express, { Express, Request, Response } from 'express'
import { connectToDB } from './core/db'
import userRoutes from './routes/user'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', userRoutes)

// api
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

//server
connectToDB().then(() => {
    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at https://localhost:${port}`
        )
    })
})
