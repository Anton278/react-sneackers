import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../assets/types";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { setCartInitState } from "./setCartInitState";

const initialState = setCartInitState();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<ICartItem>) {
            const findProduct: ICartItem | undefined = state.cart.find(
                (product: ICartItem) => product.id === action.payload.id
            );

            if (findProduct) {
                findProduct.count++;
            } else {
                state.cart.push(action.payload);
            }

            state.totalPrice = calcTotalPrice(state.cart);
        },
        removeProduct(state, action: PayloadAction<number>) {
            const findItem = state.cart.find(
                (product: ICartItem) => product.id === action.payload
            );
            if (findItem && findItem.count > 1) {
                findItem.count--;
            } else if (findItem) {
                state.cart = state.cart.filter(
                    (product: ICartItem) => product.id !== action.payload
                );
            }
            state.totalPrice = calcTotalPrice(state.cart);
        },
        setShowCart(state, action: PayloadAction<boolean>) {
            state.showCart = action.payload;
        },
        setShowIsOrderPlaced(state, action: PayloadAction<boolean>) {
            state.showIsOrderPlaced = action.payload;
        },
        clearCart(state) {
            state.cart = [];
            state.totalPrice = 0;
        },
    },
});

export const { addProduct, removeProduct, setShowCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
