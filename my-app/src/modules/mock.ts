import { PassesResult } from "./PassesAPI";

export const PASSES_MOCK: PassesResult = {
  client_card_id: 0,
  client_card_count: 3, 
  passes: [
    {
        id: 1,
        name: "Автобусы 30 дней",
        description: "Удобное и доступное передвижение по городу без ограничений.",
        price: 300,
        image: "",
    },
    {
      id: 2,
      name: "Автобусы 60 дней",
      description: "Удобное и доступное передвижение по городу без ограничений.",
      price: 500,
      image: "",
  },
  {
      id: 5,
      name: "Автобусы 90 дней",
      description: "Удобное и доступное передвижение по городу без ограничений.",
      price: 700,
      image: "",
  },
  ],
};
