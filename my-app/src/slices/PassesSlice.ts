import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    searchValue: string;
}

const initialState: SearchState = {
    searchValue: '',
};

const passesSlice = createSlice({
    name: 'passes',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    },
});

export const { setSearchValue } = passesSlice.actions;

export default passesSlice.reducer;