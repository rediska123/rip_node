import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PassesResponse } from '../api/Api';
import { api } from '../api';

interface SearchState {
    searchValue: string;
    passes: PassesResponse | null;
}

const initialState: SearchState = {
    searchValue: '',
    passes: null,
};

export const fetchPasses = createAsyncThunk<PassesResponse, void>(
    'auth/fetchClientCard',
    async () => {
        const { request } = await api.passes.passesList();
        if (request.status === 200) {
          const clientCard = JSON.parse(request.response) as PassesResponse;
          return clientCard;
        } 
    }
  );

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
    extraReducers: (builder) => {
        builder
        .addCase(fetchPasses.fulfilled, (state, action) => {
            state.passes = action.payload;
          })
      },
});

export const { setSearchValue, setPasses } = passesSlice.actions;

export default passesSlice.reducer;