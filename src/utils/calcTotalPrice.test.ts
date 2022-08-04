import { ICartItem } from "../assets/types";
import { calcTotalPrice } from "./calcTotalPrice";

describe("calcTotalPrice should", () => {
    test("work correct with data", () => {
        const cart: ICartItem[] = [
            { name: "", img: "", price: 100, count: 2, id: 1 },
            { name: "", img: "", price: 200, count: 3, id: 2 },
        ];
        expect(calcTotalPrice(cart)).toBe(800);
    });
    test("work correct with empty array", () => {
        expect(calcTotalPrice([])).toBe(0);
    });
});
