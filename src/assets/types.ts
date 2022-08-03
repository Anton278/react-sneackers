export interface ICartItem {
    name: string;
    img: string;
    price: number;
    id: number;
    count: number;
}

export interface IProduct {
    name: string;
    img: string;
    price: number;
    id: number;
}

export interface IOrder {
    id: string;
    products: ICartItem[];
}
