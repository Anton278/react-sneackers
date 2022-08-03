import { IOrder } from "../../assets/types";

export type OrdersInitState = {
    sendOrderError: string;
    getOrdersError: string;
    sendOrderStatus: "success" | "error" | "sending" | "idle";
    getOrdersStatus: "success" | "error" | "sending";
    orders: IOrder[];
};
