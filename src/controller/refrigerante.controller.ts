import { type Request, type Response } from 'express'
import type { CriarRefrigerante } from '../types/refrigerante.js';
import { refrigeranteService } from '../services/refrigerantes.service.js';

class RefrigeranteController {
    async create(req: Request<{}, {}, CriarRefrigerante>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.create(req.body)

            return res.status(201).json(refrigerante)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro ao cadastrar refri")
        }

    }

    async getAll(req: Request, res: Response) {
        try {
            const refrigerantes = await refrigeranteService.getAll()

            return res.status(200).json(refrigerantes)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro ao buscar refris")
        }
    }

    async getId(req: Request<{id: string}>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.getId(req.params.id)

            return res.status(200).json(refrigerante)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro ao buscar refri")
        }

    }
    async update(req: Request<{id: string}, {}, CriarRefrigerante>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.update(req.params.id, req.body)

            return res.status(201).json(refrigerante)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro ao atualizar refri")
        }

    }
    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const refrigerante = await refrigeranteService.delete(req.params.id)

            return res.status(200).json(refrigerante)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro ao deletar refri")
        }

    }
}

export const refrigeranteController = new RefrigeranteController()