import {
    SET_SHOW_CART,
    GET_SNEACKERS,
    SET_IS_LOADING,
    ADD_TO_FAVORITES,
    DELETE_FROM_FAVORITES,
    SET_CART_IMG_HOVER,
    SET_CART_IMG_PRIMARY,
    SET_FAVORITES_PAGE_IMG_HOVER,
    SET_FAVORITES_PAGE_IMG_PRIMARY,
    SET_ORDERS_PAGE_IMG_HOVER,
    SET_ORDERS_PAGE_IMG_PRIMARY,
    ADD_TO_CART,
    DELETE_FROM_CART,
    GET_ORDERS,
    SHOW_IS_ORDER_PLACED,
    CLEAR_CART,
    SET_ORDERS_COUNT,
} from "./actions";

type Action = {
    type: string;
    payload: any;
};
interface ISneackers {
    name: string;
    price: number;
    img: string;
    id: number;
}

const defaultCartState = () => {
    let cart = localStorage.getItem("cart");
    if (typeof cart === "string") {
        cart = JSON.parse(cart);
        if (Array.isArray(cart)) {
            return { showIsOrderPlaced: false, cart: cart };
        }
    }
    return { showIsOrderPlaced: false, cart: [] };
};
export const cartReducer = (state = defaultCartState(), action: Action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (sneackers: ISneackers) => sneackers.id !== action.payload
                ),
            };
        case CLEAR_CART:
            return { ...state, cart: [] };
        case SHOW_IS_ORDER_PLACED:
            return { ...state, showIsOrderPlaced: action.payload };
        default:
            return state;
    }
};

const defaultHeaderState = {
    showCart: false,
    cartImg: "./images/cart.svg",
    favoritesPageImg: "./images/heart.svg",
    ordersPageImg: "./images/account.svg",
};
export const headerReducer = (state = defaultHeaderState, action: Action) => {
    switch (action.type) {
        case SET_SHOW_CART:
            return { ...state, showCart: action.payload };
        case SET_CART_IMG_HOVER:
            return { ...state, cartImg: "./images/cart-hover.svg" };
        case SET_CART_IMG_PRIMARY:
            return { ...state, cartImg: "./images/cart.svg" };
        case SET_FAVORITES_PAGE_IMG_HOVER:
            return { ...state, favoritesPageImg: "/images/heart-hover.svg" };
        case SET_FAVORITES_PAGE_IMG_PRIMARY:
            return { ...state, favoritesPageImg: "/images/heart.svg" };
        case SET_ORDERS_PAGE_IMG_HOVER:
            return { ...state, ordersPageImg: "/images/account-hover.svg" };
        case SET_ORDERS_PAGE_IMG_PRIMARY:
            return { ...state, ordersPageImg: "/images/account.svg" };
        default:
            return state;
    }
};

const defaultSneackersState = {
    sneackers: [],
    isLoading: true,
};
export const sneackersReducer = (
    state = defaultSneackersState,
    action: Action
) => {
    switch (action.type) {
        case GET_SNEACKERS:
            return { ...state, sneackers: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

const defaultFavoritesState = () => {
    let favorites = localStorage.getItem("favorites");
    if (typeof favorites === "string") {
        favorites = JSON.parse(favorites);
        if (Array.isArray(favorites)) {
            return favorites;
        }
    }
    return [];
};
export const favoritesReducer = (
    state = defaultFavoritesState(),
    action: Action
) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload];
        case DELETE_FROM_FAVORITES:
            return state.filter(
                (sneackers: any) => sneackers.id !== action.payload
            );
        default:
            return state;
    }
};

const defaultOrdersState = {
    orders: [],
    ordersCount: 0,
};
export const ordersReducer = (state = defaultOrdersState, action: Action) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state, orders: [...action.payload] };
        case SET_ORDERS_COUNT:
            return { ...state, ordersCount: action.payload };
        default:
            return state;
    }
};
