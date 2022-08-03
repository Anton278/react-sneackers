import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../assets/types";
import { sendOrder, getOrders } from "../asyncActions";
import { OrdersInitState } from "./types";

const initialState: OrdersInitState = {
    sendOrderError: "",
    getOrdersError: "",
    sendOrderStatus: "idle",
    getOrdersStatus: "success",
    orders: [],
};

const orders = createSlice({
    name: "order",
    initialState,
    reducers: {
        setSendOrderStatus(state, action: PayloadAction<"idle">) {
            state.sendOrderStatus = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(sendOrder.fulfilled, (state) => {
            state.sendOrderStatus = "success";
        });
        builder.addCase(sendOrder.pending, (state) => {
            state.sendOrderStatus = "sending";
        });
        builder.addCase(sendOrder.rejected, (state, action) => {
            state.sendOrderStatus = "error";
            if (action.payload) {
                state.sendOrderError = action.payload;
            }
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.getOrdersStatus = "success";
        });
        builder.addCase(getOrders.pending, (state) => {
            state.getOrdersStatus = "sending";
        });
        builder.addCase(getOrders.rejected, (state, action) => {
            if (action.error.name && action.error.message) {
                state.getOrdersError = `${action.error.name}. ${action.error.message}`;
            } else {
                state.getOrdersError = "Error occured. Try again later.";
            }
            state.getOrdersStatus = "error";
        });
    },
});

export const { setSendOrderStatus } = orders.actions;

export default orders.reducer;
