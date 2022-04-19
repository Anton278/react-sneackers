import "./CartItem.scss";
import close from "../../assets/img/close.svg";
import closeHover from "../../assets/img/close-hover.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_FROM_CART } from "../../actions";

interface ICartItemProps {
    img: string;
    name: string;
    price: number;
    id: number;
}

const CartItem = ({ img, name, price, id }: ICartItemProps) => {
    const [closeImg, setCloseImg] = useState(close);
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
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
                onClick={() =>
                    dispatch({ type: DELETE_FROM_CART, payload: id })
                }
            />
        </div>
    );
};

export default CartItem;
