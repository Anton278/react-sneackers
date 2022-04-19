import "./CartWithNotification.scss";
import box from "./box.png";
import done from "./done.png";
import CustomGreenButton from "../CustomGreenButton";
import { useDispatch, useSelector } from "react-redux";
import {
    SET_SHOW_CART,
    getOrdersCount,
    SHOW_IS_ORDER_PLACED,
} from "../../actions";
import { useEffect } from "react";

type CartWithNotificationProps = {
    type: "emptyCart" | "orderPlaced";
};

const CartWithNotification = ({ type }: CartWithNotificationProps) => {
    const ordersCount = useSelector(
        (state: any) => state.ordersReducer.ordersCount
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrdersCount());
    }, []);

    if (type === "emptyCart") {
        return (
            <div className="empty-cart">
                <div className="empty-cart__header">Корзина</div>
                <div className="empty-cart__body">
                    <img
                        src={box}
                        alt="box"
                        className="empty-cart__img"
                        width={120}
                        height={120}
                    />
                    <div className="empty-cart__title">Корзина пустая</div>
                    <div className="empty-cart__subtitle">
                        Добавьте хотя бы одну пару кроссовок, чтобы сделать
                        заказ.
                    </div>
                    <CustomGreenButton
                        type="move-back"
                        onClick={() =>
                            dispatch({ type: SET_SHOW_CART, payload: false })
                        }
                    />
                </div>
            </div>
        );
    } else if (type === "orderPlaced") {
        return (
            <div className="empty-cart">
                <div className="empty-cart__header">Корзина</div>
                <div className="empty-cart__body">
                    <img
                        src={done}
                        alt="done"
                        className="empty-cart__img"
                        width={83}
                        height={120}
                    />
                    <div className="empty-cart__title empty-cart__title_green">
                        Корзина пустая
                    </div>
                    <div className="empty-cart__subtitle">
                        Ваш заказ #{ordersCount} скоро будет передан курьерской
                        доставке
                    </div>
                    <CustomGreenButton
                        type="move-back"
                        onClick={() => {
                            dispatch({ type: SET_SHOW_CART, payload: false });
                            dispatch({
                                type: SHOW_IS_ORDER_PLACED,
                                payload: false,
                            });
                        }}
                    />
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default CartWithNotification;
