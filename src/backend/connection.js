import mongoose from "mongoose"


export const DB=async()=>{
    try{
     await  mongoose.connect("mongodb+srv://muzammil844641:muzammil1244@cluster0.t7sy0hc.mongodb.net/data")
     console.log("DB connected")
    }catch(err){

        console.log(err)
    }

}