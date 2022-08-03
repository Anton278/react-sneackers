import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart.cart;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectShowCart = (state: RootState) => state.cart.showCart;
export const selectShowIsOrderPlaced = (state: RootState) =>
    state.cart.showIsOrderPlaced;
