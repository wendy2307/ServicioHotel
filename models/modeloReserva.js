import mongoose from "mongoose";

const Schema= mongoose.Schema

const Reserva=new Schema({
    nombre:{
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

export const modeloReserva=mongoose.model('reservas',Reserva)