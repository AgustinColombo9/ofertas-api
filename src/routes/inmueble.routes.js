import { Router } from 'express'
import { getInmuebles, getInmueblesFiltroUno } from '../controllers/inmueble.controller.js'

const router = Router();

router.get('/inmuebles/getInmuebles', getInmuebles)

router.get(`/inmuebles/getInmueblesFiltroUno/:fecha_desde/:fecha_hasta/:ciudad_id/:habitaciones/:adultos/:ninios`, getInmueblesFiltroUno)

export default router