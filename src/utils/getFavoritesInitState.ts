import { IProduct } from "../assets/types";

export const getFavoritesInitState = () => {
    const data = localStorage.getItem("favorites");
    const favorites = data ? JSON.parse(data) : [];

    return favorites as Array<IProduct>;
};
