import dotenv from "dotenv";

import connectDB from "./db/index.js";

import {app} from './app.js'

const PORT = process.env.PORT;
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.get("/", (req, res) => {
        return res.json({
            success:true,
            message:'Your server is up and running....'
        });
    });
    
    app.listen(PORT, () => {
        console.log(`App is running at ${PORT}`)
    })
})
    .catch((err)=>{
        console.log("MongoDB connection failed !" , err)
    })
