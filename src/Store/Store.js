import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import userReducer from "./UserSlice";

export const store = configureStore({
    reducer : {
        productsReducer: productsReducer,
        userReducer: userReducer
    }
})  