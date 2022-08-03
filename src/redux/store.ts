import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import products from "./products/slice";
import cart from "./cart/slice";
import favorite from "./favorites/slice";
import orders from "./orders/slice";

export const store = configureStore({
    reducer: { products, cart, favorite, orders },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
