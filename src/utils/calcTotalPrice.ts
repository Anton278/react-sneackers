import { ICartItem } from "../assets/types";

export const calcTotalPrice = (cart: Array<ICartItem>) => {
    let totalPrice: number = 0;
    cart.forEach(
        (product: ICartItem) => (totalPrice += product.price * product.count)
    );
    return totalPrice;
};
