import { store } from "../store";

describe("ordersSlice should", () => {
    test("set init state", () => {
        const {
            sendOrderError,
            getOrdersError,
            sendOrderStatus,
            getOrdersStatus,
            orders,
        } = store.getState().orders;
        expect(sendOrderError).toBe("");
        expect(getOrdersError).toBe("");
        expect(sendOrderStatus).toBe("idle");
        expect(getOrdersStatus).toBe("success");
        expect(orders).toEqual([]);
    });
});
