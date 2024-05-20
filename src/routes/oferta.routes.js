import { Router } from 'express'
import { getOfertas } from '../controllers/oferta.controller.js'

const router = Router();

router.get('/ofertas/getOfertas', getOfertas)

//router.get('/ofertas/getOfertasId/:id', getOfertasId)

export default router;