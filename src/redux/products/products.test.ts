import { setStatus } from "./slice";
import { store } from "../store";

describe("productsSlice should", () => {
    test("set initial state", () => {
        const { products, status, errorText } = store.getState().products;
        expect(products).toEqual([]);
        expect(status).toBe("loading");
        expect(errorText).toBe("");
    });
    test("handle setStatus case", () => {
        store.dispatch(setStatus("success"));
        expect(store.getState().products.status).toBe("success");
    });
});
