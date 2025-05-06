import mongoose from "mongoose"


export const DB=async()=>{
    try{
     await  mongoose.connect("mongodb+srv://muzammil844641:FEszrhfCROUqO91T@cluster0.p3cd5qg.mongodb.net/data")
     console.log("DB connected")
    }catch(err){

        console.log(err)
    }

}