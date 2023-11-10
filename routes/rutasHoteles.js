//espacio para definir las rutas
// o endpoints especificos de SU API
import express from "express";

//importo los controladores
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReserva } from "../controllers/ControladorReserva.js";
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()



export let rutasAPI = express.Router();


//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controladorHabitacion.registrar)
rutasAPI.get("/api/habitaciones",controladorHabitacion.buscarTodas)
rutasAPI.get("/api/habitacion/:id",controladorHabitacion.buscarPorId)
rutasAPI.put("/api/habitaciones/:id", controladorHabitacion.modificar)
rutasAPI.delete("/api/habitacion/:id",controladorHabitacion.eliminar)
rutasAPI.post("/api/reservas", controladorReserva.registrar)
rutasAPI.get("/api/reservas", controladorReserva.buscarTodas)
rutasAPI.get("/api/reserva/:id", controladorReserva.buscarPorId)
rutasAPI.put("/api/reservas/:id", controladorReserva.modificar)
rutasAPI.delete("/api/reservas/:id", controladorReserva.eliminar)
