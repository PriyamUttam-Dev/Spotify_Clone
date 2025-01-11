import mongoose from "mongoose"
export const connectDB = async () => {
    try {
      const conn =  await mongoose.connect(process.env.MONGODB_URL)
      console.log(`connected db ${conn.connection.host}`)
    } catch (error) {
        console.log("Failed to connect" , error)
        process.exit(1);  //1 is failure and 0 is success message
        
    }
}