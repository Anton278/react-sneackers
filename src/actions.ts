import axios from "axios";

export const SET_SHOW_CART = "SET_SHOW_CART";
export const GET_SNEACKERS = "GET_SNEACKERS";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";
export const SET_CART_IMG_HOVER = "SET_CART_IMG_HOVER";
export const SET_CART_IMG_PRIMARY = "SET_CART_IMG_PRIMARY";
export const SET_FAVORITES_PAGE_IMG_HOVER = "SET_FAVORTES_PAGE_IMG_HOVER";
export const SET_FAVORITES_PAGE_IMG_PRIMARY = "SET_FAVORTES_PAGE_IMG_PRIMARY";
export const SET_ORDERS_PAGE_IMG_HOVER = "SET_ORDERS_PAGE_IMG_HOVER";
export const SET_ORDERS_PAGE_IMG_PRIMARY = "SET_ORDERS_PAGE_IMG_PRIMARY";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const GET_ORDERS = "GET_ORDERS";
export const SHOW_IS_ORDER_PLACED = "SHOW_IS_ORDER_PLACED";
export const CLEAR_CART = "CLEAR_CART";
export const SET_ORDERS_COUNT = "GET_ORDERS_COUNT";

export const getSneackers = () => {
    return (dispatch: any) => {
        fetch("https://6255731d52d8738c692220fb.mockapi.io/items")
            .then((data) => data.json())
            .then((data) => {
                dispatch({ type: GET_SNEACKERS, payload: data });
                dispatch({ type: SET_IS_LOADING, payload: false });
            });
    };
};

export const getOrders = () => {
    return (dispatch: any) => {
        fetch("https://6255731d52d8738c692220fb.mockapi.io/orders")
            .then((data) => data.json())
            .then((data) => dispatch({ type: GET_ORDERS, payload: data }));
    };
};
export const getOrdersCount = () => {
    return (dispatch: any) => {
        fetch("https://6255731d52d8738c692220fb.mockapi.io/orders")
            .then((data) => data.json())
            .then((data) => {
                const ordersCount = data[data.length - 1].id;
                dispatch({ type: SET_ORDERS_COUNT, payload: ordersCount });
            });
    };
};

interface ISneackers {
    name: string;
    price: number;
    img: string;
    id: string;
}
export const placeOrder = (cart: Array<ISneackers>) => {
    return (dispatch: any) => {
        axios
            .post("https://6255731d52d8738c692220fb.mockapi.io/orders", {
                order: cart,
            })
            .then(() => {
                dispatch({ type: CLEAR_CART });
                dispatch({ type: SHOW_IS_ORDER_PLACED, payload: true });
            });
    };
};
