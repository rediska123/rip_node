import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PassesResponse, User, UserResponse} from '../api/Api'


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
            state.clientcard_id = action.payload.clientcard_id;
            state.clientcard_count = action.payload.clientcard_count
        }
    },
});

export const { setUser, logout, setclientcard } = authSlice.actions;

export default authSlice.reducer;