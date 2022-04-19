import "./Cart.scss";
import closeImg from "../../assets/img/close.svg";
import closeHoverImg from "../../assets/img/close-hover.svg";
import { useState } from "react";
import CartItem from "../CartItem";
import CartWithNotification from "../CartWithNotification";
import CustomGreenButton from "../CustomGreenButton";
import { useDispatch, useSelector } from "react-redux";
import { SET_SHOW_CART, placeOrder } from "../../actions";

interface ISneackers {
    img: string;
    name: string;
    price: number;
    id: number;
}

const Cart = () => {
    const [closeIcon, setCloseIcon] = useState(closeImg);

    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartReducer.cart);
    const showIsOrderPlaced = useSelector(
        (state: any) => state.cartReducer.showIsOrderPlaced
    );

    const calcTotalPrice = (): number => {
        let totalPrice: number = 0;
        cart.forEach((sneackers: ISneackers) => {
            totalPrice += sneackers.price;
        });
        return totalPrice;
    };
    const calcTax = (): number => {
        return calcTotalPrice() * 0.05;
    };

    if (showIsOrderPlaced) {
        return (
            <>
                <div className="overlay"></div>
                <CartWithNotification type="orderPlaced" />
            </>
        );
    } else if (!cart.length) {
        return (
            <>
                <div className="overlay"></div>
                <CartWithNotification type="emptyCart" />
            </>
        );
    } else {
        return (
            <>
                <div className="overlay"></div>
                <div className="cart">
                    <div className="cart__header">
                        <span>Корзина</span>
                        <img
                            src={closeIcon}
                            alt="close"
                            onMouseOver={() => setCloseIcon(closeHoverImg)}
                            onMouseOut={() => setCloseIcon(closeImg)}
                            width={32}
                            height={32}
                            onClick={() =>
                                dispatch({
                                    type: SET_SHOW_CART,
                                    payload: false,
                                })
                            }
                        />
                    </div>
                    <div className="cart__items-wrapp">
                        {cart.map((sneackers: ISneackers) => (
                            <CartItem
                                img={sneackers.img}
                                name={sneackers.name}
                                price={sneackers.price}
                                id={sneackers.id}
                                key={sneackers.id}
                            />
                        ))}
                    </div>
                    <div className="cart__footer">
                        <div className="cart__totals">
                            <div className="cart__total">
                                <span>Итого:</span>
                                <div></div>
                                <b>{calcTotalPrice()} грн.</b>
                            </div>
                            <div className="cart__total">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{calcTax()} грн.</b>
                            </div>
                        </div>
                        <CustomGreenButton
                            type="place-order"
                            onClick={() => dispatch(placeOrder(cart))}
                        />
                    </div>
                </div>
            </>
        );
    }
};

export default Cart;
