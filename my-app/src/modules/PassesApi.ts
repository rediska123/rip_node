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
    return fetch(`http://localhost:8000/passes/?price=${price}`)
        .then((response) => response.json())
}

export const getPassById = async (
    id: number | string
  ): Promise<Pass> => {
    return fetch(`http://localhost:8000/passes/${id}/`).then(
      (response) => response.json()
    );
  };
  