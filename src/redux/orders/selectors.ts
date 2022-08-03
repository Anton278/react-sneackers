import { RootState } from "../store";

export const selectSendOrderError = (state: RootState) =>
    state.orders.sendOrderError;
export const selectSendOrderStatus = (state: RootState) =>
    state.orders.sendOrderStatus;
export const selectOrders = (state: RootState) => state.orders.orders;
