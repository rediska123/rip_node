// src/features/orders/ordersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientCard } from '../api/Api';

interface cards {
    clientcards: ClientCard[]
}

const initialState: cards = {
  clientcards: [],
};

const ClientcardsSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ClientCard[]>) => {
        console.log("SET CARDS")
        console.log(action.payload)
        state.clientcards = action.payload;
      },
    clearCards: (state) => {
        state.clientcards = [];
      },
  },
});

export const { setCards, clearCards } = ClientcardsSlice.actions;
export default ClientcardsSlice.reducer;
