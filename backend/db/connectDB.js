import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_URI)
        // console.log(connectionInstance)
    } catch (error) {
        console.log("Error connecting to DB :", error.message)
    }
}

export default connectDB