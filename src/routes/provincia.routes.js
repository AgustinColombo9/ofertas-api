import { Router } from 'express'
import { getProvincias } from '../controllers/provincia.controller.js'

const router = Router();

router.get('/provincias/getProvincias', getProvincias)


export default router