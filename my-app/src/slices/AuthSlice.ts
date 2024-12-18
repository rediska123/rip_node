import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PassesResponse, User} from '../api/Api'
import { api } from '../api';


interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    clientcard_id: number;
    clientcard_count: number;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    clientcard_id: -1,
    clientcard_count: -1
};

export const login = createAsyncThunk<User, {username:string, password:string}>(
    'auth/login',
    async ({ username, password }) => {
        const { request } = await api.auth.authCreate({ username, password });
        if (request.status === 200) {
          const user = JSON.parse(request.response) as User;
          return user;
        }
    }
  );
  
  export const fetchClientCard = createAsyncThunk<PassesResponse, void>(
    'auth/fetchClientCard',
    async () => {
        const { request } = await api.passes.passesList();
        if (request.status === 200) {
          const clientCard = JSON.parse(request.response) as PassesResponse;
          return clientCard;
        } 
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.clientcard_id = -1;
            state.clientcard_count = -1;
        },
        setclientcard(state, action: PayloadAction<PassesResponse>) {
            if (action.payload.clientcard_id === null || action.payload.clientcard_count < 1) {
                state.clientcard_id = -1;
                state.clientcard_count = -1;
            } else {
                state.clientcard_id = action.payload.clientcard_id;
                state.clientcard_count = action.payload.clientcard_count;
            }
        },
        clearClientcard(state){
            state.clientcard_id = -1;
            state.clientcard_count = -1;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
          })
          .addCase(fetchClientCard.fulfilled, (state, action) => {
            if (action.payload.clientcard_id === null || action.payload.clientcard_count < 1) {
              state.clientcard_id = -1;
              state.clientcard_count = -1;
            } else {
              state.clientcard_id = action.payload.clientcard_id;
              state.clientcard_count = action.payload.clientcard_count;
            }
          })
      },
});

export const { setUser, logout, setclientcard, clearClientcard } = authSlice.actions;

export default authSlice.reducer;