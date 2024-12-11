import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PassesResponse } from '../api/Api';

interface SearchState {
    searchValue: string;
    passes: PassesResponse | null;
}

const initialState: SearchState = {
    searchValue: '',
    passes: null,
};

const passesSlice = createSlice({
    name: 'passes',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setPasses(state, action: PayloadAction<PassesResponse>) {
            state.passes = action.payload;
        },
    },
});

export const { setSearchValue, setPasses } = passesSlice.actions;

export default passesSlice.reducer;