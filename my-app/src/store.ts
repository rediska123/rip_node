import { configureStore } from "@reduxjs/toolkit"
import passesReducer from "./slices/PassesSlice"

export default configureStore({
    reducer: {
        passes: passesReducer,
    },
})