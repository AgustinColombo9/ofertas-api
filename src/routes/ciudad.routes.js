import { Router } from 'express'
import { getCiudades, getCiudadesProvinciaId } from '../controllers/ciudad.controller.js'

const router = Router();

router.get('/ciudades/getCiudades', getCiudades)

router.get('/ciudades/getCiudadesProvinciaId/:id', getCiudadesProvinciaId)

export default router