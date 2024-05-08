import { Router } from 'express'
import { getCategorias, getCategoriasRubroId } from '../controllers/categoria.controller.js'

const router = Router();

router.get('/categorias/getCategorias', getCategorias)

router.get('/categorias/getCategoriasRubroId/:id', getCategoriasRubroId)

export default router