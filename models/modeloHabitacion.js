import mongoose from "mongoose"

const Schema = mongoose.Schema

const Habitacion=new Schema({
    name:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones',Habitacion)