import { IProduct } from "../../assets/types";

export type InitState = {
    products: IProduct[];
    status: "loading" | "success" | "error";
    errorText: string;
};
