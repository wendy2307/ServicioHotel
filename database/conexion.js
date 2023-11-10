import mongoose from "mongoose";

export async function establecerConexionBD(){
    try{
        await mongoose.connect(process.env.DB)
        console.log("exito en la conexion")

    }catch(error){
        console.log("error: "+error)
    }
}