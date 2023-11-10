import {modeloReserva} from "../models/modeloReserva.js"
export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let Reservas=await modeloReserva.find()
        return Reservas;
    }
    async buscarPorId(id){
        let Reserva = await modeloReserva.findById(id)
        return Reserva
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let ReservaNueva=new modeloReserva(datos)
        return await ReservaNueva.save()
    }
    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}