import { ICartItem } from "../../assets/types";

export type CartInitStat = {
    cart: Array<ICartItem>;
    totalPrice: number;
    showCart: boolean;
    showIsOrderPlaced: boolean;
};
