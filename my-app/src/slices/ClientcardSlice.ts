import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pass, ClientCardDetails, ClientCard, ClientCardPass } from '../api/Api';

interface cards {
    clientcard: ClientCardDetails | null
}

const initialState: cards = {
  clientcard: null,
};

const procurementSlice = createSlice({
    name: 'procurement',
    initialState,
    reducers: {
        setClientcard(state, action: PayloadAction<ClientCardDetails>) {
            state.clientcard = action.payload;
        },
        setItems(state, action: PayloadAction<ClientCardPass>) {
            if (state !== null && state.clientcard != null)
                state.clientcard.passes = action.payload
        },
        clearClientcard: (state) => {
            state.clientcard = null;
        },
    },
});

export const { setClientCard, setItems } = procurementSlice.actions;

export default procurementSlice.reducer;