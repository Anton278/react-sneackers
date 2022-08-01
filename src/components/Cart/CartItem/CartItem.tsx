import "./CartItem.scss";
import close from "../../../assets/img/close.svg";
import closeHover from "../../../assets/img/close-hover.svg";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { removeProduct } from "../../../redux/cart/slice";

type CartItemProps = {
    img: string;
    name: string;
    price: number;
    id: number;
    count: number;
};

const CartItem = ({ img, name, price, id, count }: CartItemProps) => {
    const [closeImg, setCloseImg] = useState(close);
    const dispatch = useAppDispatch();

    return (
        <div className="cart-item">
            <div className="cart-item__row">
                <img
                    src={img}
                    alt={name}
                    width={70}
                    height={70}
                    className="cart-item__img"
                />
                <div className="cart-item__text">
                    <p>{name}</p>
                    <b>{price} грн.</b>
                </div>
                <img
                    src={closeImg}
                    alt="close-button"
                    className="cart-item__close-btn"
                    width={32}
                    height={32}
                    onMouseOver={() => setCloseImg(closeHover)}
                    onMouseOut={() => setCloseImg(close)}
                    onClick={() => dispatch(removeProduct(id))}
                />
            </div>
            <div className="cart-item__row">Количество: {count}</div>
        </div>
    );
};

export { CartItem };
