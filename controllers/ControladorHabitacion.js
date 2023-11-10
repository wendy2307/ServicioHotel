import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitacion{
    constructor(){}
    
    async buscarTodas(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "datos":await servicioHabitacion.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"fallamos buscando las habitaciones",
                "datos":await servicioHabitacion.buscarTodas()
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            //2. con el id que madno el cliente busco habitacion en BD
            //3.Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos":await servicioHabitacion.buscarPorId(id)
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las habitaciones"+error,
                "datos":null
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datosModificar=request.body
            await servicioHabitacion.modificar(id,datosModificar)
            //2.modificar en BD
            //3. enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la habitacion",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando la habitacion"+error,
                "datos":null
            })
        }
    }
    async registrar(request,response){
        try{
           let servicioHabitacion = new ServicioHabitacion()
           let datos = request.body
           await servicioHabitacion.registrar(datos)
            response.status(200).json({
               mensaje : "exito en el registro",
               datos : datos
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la habitacion"+error,
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            await servicioHabitacion.eliminar(id)
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
                "mensaje":"Fallamos borrando la habitacion"+error,
            })
        }
    }
}