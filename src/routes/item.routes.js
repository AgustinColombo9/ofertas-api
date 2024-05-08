import { Router } from 'express'
import { getItems, getItemsRubroId, getItemsCategoriaId } from '../controllers/item.controller.js'

const router = Router();

router.get('/items/getItems', getItems)

router.get('/items/getItemsCategoriaId/:id', getItemsCategoriaId)

router.get('/items/getItemsRubroId/:id', getItemsRubroId)

export default router;