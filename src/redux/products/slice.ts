import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../asyncActions";
import { InitState } from "./types";

const initialState: InitState = {
    products: [],
    status: "loading",
    errorText: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setStatus(
            state,
            action: PayloadAction<"loading" | "success" | "error">
        ) {
            state.status = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = "success";
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = "error";
            if (action.error.name && action.error.message) {
                state.errorText = `${action.error.name}. ${action.error.message}`;
            } else {
                state.errorText = "Error occured. Try again later.";
            }
        });
    },
});

export const { setStatus } = productsSlice.actions;

export default productsSlice.reducer;
