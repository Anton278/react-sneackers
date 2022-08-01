import "./CartNotification.scss";
import box from "../../../assets/img/box.png";
import done from "../../../assets/img/done.png";
import { CustomButton } from "../../CustomButton";
import { useAppDispatch } from "../../../redux/store";
import { setShowCart } from "../../../redux/cart/slice";
import { setSendOrderStatus } from "../../../redux/orders/slice";

type CartNotificationProps = {
    type: "empty-cart" | "order-placed";
};

const CartNotification: React.FC<CartNotificationProps> = ({ type }) => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        if (type === "empty-cart") {
            dispatch(setShowCart(false));
        } else {
            dispatch(setSendOrderStatus("idle"));
            dispatch(setShowCart(false));
        }
    };

    return (
        <div className="cart-box">
            <img
                src={type === "empty-cart" ? box : done}
                alt={type === "empty-cart" ? "box" : "done"}
                className="cart-box__img"
                width={type === "empty-cart" ? 120 : 83}
                height={120}
            />
            <h3 className="cart-box__title">
                {type === "empty-cart" ? "Корзина пустая" : "Заказ оформлен!"}
            </h3>
            <h5 className="cart-box__subtitle">
                {type === "empty-cart"
                    ? "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                    : `Ваш заказ скоро будет передан курьерской доставке`}
            </h5>
            <CustomButton
                width="245px"
                clickHandler={clickHandler}
                type="move-back"
            >
                Вернуться назад
            </CustomButton>
        </div>
    );
};

export { CartNotification };
