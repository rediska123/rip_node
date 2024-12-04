import { PASSES_MOCK } from "./mock"


export interface Pass {
    id: number
    name: string
    description: string
    price: number
    image: string
}

export interface PassesResult {
    client_card_id: number
    client_card_count: number
    passes: Pass[]
}

export const getPassesByPrice = async (price = ''): Promise<PassesResult> =>{
    return fetch(`/api/passes/?price=${price}`)
        .then((response) => response.json())
        .catch(()=> (PASSES_MOCK))
}

export const getPassById = async (
    id: number
  ): Promise<Pass> => {
    return fetch(`/api/passes/${id}/`)
    .then((response) => response.json())
    .catch(()=> (PASSES_MOCK.passes.find(
      (pass) => pass.id === id
    )))
  };
  