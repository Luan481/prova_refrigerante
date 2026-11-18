import { refrigeranteRepository } from "../repositories/refrigerantes.repository.js";
import type { CriarRefrigerante } from "../types/refrigerante.js";

class RefrigeranteService {
    async create(dados: CriarRefrigerante) {
        return await refrigeranteRepository.create(dados)
    }

    async getAll() {
        return await refrigeranteRepository.getAll()
    }
    async getId(id: string) {
        return await refrigeranteRepository.getId(id)
    }
    async update(id: string, dados: CriarRefrigerante) {
        return await refrigeranteRepository.update(id, dados)
    }
    async delete(id: string) {
        return await refrigeranteRepository.delete(id)
    }

}

export const refrigeranteService = new RefrigeranteService