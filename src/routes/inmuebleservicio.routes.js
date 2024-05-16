import { Router } from 'express'
import { getServicios } from '../controllers/inmuebleservicio.controller.js'

const router = Router();

router.get('/inmuebleservicio/getServicios', getServicios)


export default router