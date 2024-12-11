import { configureStore } from "@reduxjs/toolkit"
import passesReducer from "./slices/PassesSlice"
import authReducer from "./slices/AuthSlice"
import clientcardsReducer from "./slices/ClientcardsSlice"
import clientcardReducer from "./slices/ClientcardSlice"


export default configureStore({
    reducer: {
        passes: passesReducer,
        auth: authReducer,
        clientcards: clientcardsReducer,
        clientcard: clientcardReducer
    },
})