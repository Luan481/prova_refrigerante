import { Router } from "express";
import { refrigeranteController } from "../controller/refrigerante.controller.js";

export const refrigeranteRoutes = Router()

refrigeranteRoutes.post('/', refrigeranteController.create)
refrigeranteRoutes.get('/', refrigeranteController.getAll)
refrigeranteRoutes.get('/:id', refrigeranteController.getId)
refrigeranteRoutes.patch('/:id', refrigeranteController.update)
refrigeranteRoutes.delete('/:id', refrigeranteController.delete)
