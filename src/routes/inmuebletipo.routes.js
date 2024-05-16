import { Router } from 'express'
import { getTipos } from '../controllers/inmuebletipo.controller.js'

const router = Router();

router.get('/inmuebletipo/getTipos', getTipos)


export default router