import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// api
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

//server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
