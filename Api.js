//Esta clase representa un servidor
import  express  from 'express'
import { rutasAPI } from './routes/rutasHoteles.js'
import {establecerConexionBD} from './database/conexion.js'
import { modeloHabitacion } from './models/modeloHabitacion.js'
import cors from "cors"

export class Api{
constructor(){
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
}

//1.Levantar el servidor
levantarServidor(){
    this.app.listen(process.env.PORT,function(){
        console.log("servidor operando");
        //console.log(modeloHabitacion)
    });
}
//2.Atiende las peticiones y 
procesarPeticiones(){
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use("/",rutasAPI)
    
}


//3.Se conecta a la Base de datos
conectarBD(){
    establecerConexionBD()
}

}