import mongoose from "mongoose";

import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.envMONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed !" , error)
        process.exit(1)
    }

}

export default connectDB