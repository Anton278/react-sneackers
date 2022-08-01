import "./Cart.scss";

import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";

import { CartItem } from "./CartItem";
import { Overlay } from "../Overlay";
import { CustomButton } from "../CustomButton";
import { CartNotification } from "./CartNotification";
import { Error } from "../Error";

import { selectCart, selectTotalPrice } from "../../redux/cart/selectors";
import { clearCart, setShowCart } from "../../redux/cart/slice";
import {
    selectSendOrderStatus,
    selectSendOrderError,
} from "../../redux/orders/selectors";
import { sendOrder } from "../../redux/asyncActions";

import close from "../../assets/img/close.svg";
import closeHover from "../../assets/img/close-hover.svg";
import { ICartItem } from "../../assets/types";

const Cart: React.FC = () => {
    const [closeImg, setCloseImg] = useState(close);

    const cart = useSelector(selectCart);
    const sendOrderStatus = useSelector(selectSendOrderStatus);

    const [showCloseBtn, setShowCloseBtn] = useState<boolean>(() => {
        if (!cart.length || sendOrderStatus === "success") {
            return false;
        } else return true;
    });

    useEffect(() => {
        if (cart.length) {
            setShowCloseBtn(true);
        } else {
            setShowCloseBtn(false);
        }
        if (sendOrderStatus === "success") {
            setShowCloseBtn(false);
        }
    }, [cart.length, sendOrderStatus]);

    const dispatch = useAppDispatch();
    const sendOrderError = useSelector(selectSendOrderError);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <>
            <Overlay></Overlay>
            <div className="cart">
                <div className="cart__header">
                    <h3 className="cart__title">Корзина</h3>
                    {showCloseBtn && (
                        <button type="button" className="cart__btn">
                            <img
                                className="cart__btn-img"
                                src={closeImg}
                                alt="close"
                                onMouseOver={() => setCloseImg(closeHover)}
                                onMouseOut={() => setCloseImg(close)}
                                width={32}
                                height={32}
                                onClick={() => dispatch(setShowCart(false))}
                            />
                        </button>
                    )}
                </div>
                {cart.length ? (
                    <div className="cart__items-wrapp">
                        {cart.map((product: ICartItem) => (
                            <CartItem {...product} key={product.id} />
                        ))}
                    </div>
                ) : sendOrderStatus === "success" ? (
                    <CartNotification type="order-placed" />
                ) : sendOrderStatus === "error" ? (
                    <Error>{sendOrderError}</Error>
                ) : (
                    <CartNotification type="empty-cart" />
                )}
                {cart.length ? (
                    <div className="cart__footer">
                        <div className="cart__totals">
                            <div className="cart__total">
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice} грн.</b>
                            </div>
                            <div className="cart__total">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{totalPrice * 0.05} грн.</b>
                            </div>
                        </div>
                        <CustomButton
                            width="100%"
                            clickHandler={() => {
                                dispatch(clearCart());
                                dispatch(sendOrder(cart));
                            }}
                            type="place-order"
                        ></CustomButton>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export { Cart };
