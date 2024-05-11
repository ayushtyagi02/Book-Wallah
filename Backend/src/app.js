import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import requests from './routes/requests.routes.js'
import book from './routes/book.routes.js'
import auth from './routes/auth.routes.js'
const app  = express()

app.use(cors({
    origin : "" ,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/v1',requests)
app.use('/api/v1',book)
app.use('/api/v1',auth)


export {app}