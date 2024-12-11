// src/features/orders/ordersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientCard } from '../api/Api';

interface cards {
    clientcards: ClientCard[],
    date_start: string;
    date_end: string;
    status: string;
}

const initialState: cards = {
  clientcards: [],
  date_start: '',
  date_end: '',
  status: '',
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
      setStartDate(state, action: PayloadAction<string>) {
        console.log("StartDate")
        console.log(action.payload)
        state.date_start = action.payload
    },
    setEndDate(state, action: PayloadAction<string>) {
        state.date_end = action.payload
    },
    setStatus(state, action: PayloadAction<string>) {
        console.log("Status")
        console.log(action.payload, typeof(action.payload))
        state.status = action.payload
    },
  },
});

export const { setCards, clearCards, setStartDate, setEndDate, setStatus } = ClientcardsSlice.actions;
export default ClientcardsSlice.reducer;
