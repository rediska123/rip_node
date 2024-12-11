import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface state {
    name: string;
    phone: string;
    
}

const initialState: state = {
    name: '',
    phone: ''
}

const ClientcardSlice = createSlice({
    name: 'Clientcard',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        clear: (state) => {
            state.name = '';
            state.phone = ''
          },
    },
});

export const { setName, setPhone, clear } = ClientcardSlice.actions;

export default ClientcardSlice.reducer;