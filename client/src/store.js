import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/productSlice"
import userReducer from "./feature/userSlice"
import chatSlice from "./feature/chatSlice"

export const store = configureStore({
    reducer : {
        product: productReducer,
        user: userReducer,
        chat: chatSlice
    }
})