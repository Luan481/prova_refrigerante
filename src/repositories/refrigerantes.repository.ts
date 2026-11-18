import { banco } from "../database/connection.js";
import type { CriarRefrigerante } from "../types/refrigerante.js";

class RefrigeranteRepository{
    async create(refrigerante: CriarRefrigerante){
        const [refrigeranteCriado] = await banco('refrigerante').insert(refrigerante).returning('*')
        return [refrigeranteCriado]
    }
    async getAll(){
        const refrigerante = await banco('refrigerante').select('*')
        return refrigerante
    }
    
    async getId(id: string){
        const [refrigerante] = await banco("refrigerante").where(id).select('*')
        return [refrigerante]
    }

    async update(id: string, dados: CriarRefrigerante){
        const [refrigerante] = await banco('refrigerante').where(id).update(dados).returning('*')
        return [refrigerante]

    }

    async delete(id: string){
        const [refrigerante] = await banco('refrigerante').where(id).delete('*')
        return [refrigerante]
    }
}

export const refrigeranteRepository = new RefrigeranteRepository()