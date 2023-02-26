import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import userReducer from "./UserSlice";
import UserMenuReducer from "./UserMenuSlice";

export const store = configureStore({
    reducer : {
        productsReducer: productsReducer,
        userReducer: userReducer,
        UserMenuReducer: UserMenuReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})  