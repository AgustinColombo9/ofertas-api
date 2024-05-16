import { Router } from 'express'
import { getPensiones } from '../controllers/inmueblepension.controller.js'

const router = Router();

router.get('/inmueblepension/getPensiones', getPensiones)


export default router