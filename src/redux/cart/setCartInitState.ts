import { ICartItem } from "../../assets/types";
import { CartInitStat } from "./types";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export const setCartInitState = (): CartInitStat => {
    const data: null | string = localStorage.getItem("cart");
    const cart: Array<ICartItem> = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(cart);

    return {
        cart,
        totalPrice,
        showCart: false,
        showIsOrderPlaced: false,
    };
};
