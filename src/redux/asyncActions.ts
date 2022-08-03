import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICartItem, IProduct, IOrder } from "../assets/types";

export const getProducts = createAsyncThunk<IProduct[], undefined>(
    "products/getProducts",
    async () => {
        const { data } = await axios.get(
            "https://6255731d52d8738c692220fb.mockapi.io/items"
        );
        return data;
    }
);

export const sendOrder = createAsyncThunk<
    undefined,
    ICartItem[],
    { rejectValue: string }
>("orders/sendOrder", (products, { rejectWithValue }) => {
    try {
        axios.post("https://6255731d52d8738c692220fb.mockapi.io/orders", {
            products,
        });
    } catch (error: any) {
        let errorText = "";
        if ("name" in error && "message" in error) {
            errorText = `${error.name}: ${error.message}`;
        } else {
            errorText = "Error occured. Try again later.";
        }
        return rejectWithValue(errorText);
    }
});

export const getOrders = createAsyncThunk<IOrder[], undefined>(
    "orders/getOrders",
    async () => {
        const url = "https://6255731d52d8738c692220fb.mockapi.io/orders";
        const { data } = await axios.get(url);
        return data;
    }
);
