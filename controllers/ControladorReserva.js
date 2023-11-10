import {ServicioReserva} from '../services/ServicioReserva.js'

let servicioReserva = new ServicioReserva();
export class ControladorReserva{
    constructor(){}
    
    async buscarTodas(request,response){
        try{
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las reservas",
                "datos":await servicioReserva.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"fallamos buscando las reservas",
            })
        }
    }
    async buscarPorId(request,response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            //2. con el id que madno el cliente busco habitacion en BD
            //3.Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la reserva",
                "datos":await servicioReserva.buscarPorId(id)
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las reservas"+error,
                "datos":null
            })
        }
    }
    async modificar(request,response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datosModificar=request.body
            await servicioReserva.modificar(id,datosModificar)
            //2.modificar en BD
            //3. enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la reserva",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando la reserva"+error,
                "datos":null
            })
        }
    }
    async registrar(request,response){
        try{
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            //await servicioHabitacion.registrar(datos)
            //dieferencia en días de esas dos fechas
            //2. guardelos en BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la reserva",
                "datos":await servicioReserva.registrar(datosRegistrar)
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la reserva"+error,
                "datos":null
            })
        }
    }
    async eliminar(request,response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            await servicioReserva.eliminar(id)
            //2. eliminelo de la BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito eliminando los datos",
                "datos":"aca los datos"
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la reserva"+error,
            })
        }
    }
}