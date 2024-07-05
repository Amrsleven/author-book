import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/library");
        console.log("connected to data base")
    }
    catch(error){
      console.log("error in data base is: ",error)
    }
}