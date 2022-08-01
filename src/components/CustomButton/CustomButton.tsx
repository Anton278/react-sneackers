import "./CustomButton.scss";
import arrowLeft from "../../assets/img/arrow-left.svg";
import arrowRight from "../../assets/img/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectSendOrderStatus } from "../../redux/orders/selectors";

type CustomButtonProps = {
    width: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    type: "move-back" | "place-order";
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { clickHandler, type, width } = props;
    const orderStatus = useSelector(selectSendOrderStatus);

    return (
        <button
            disabled={orderStatus === "sending"}
            onClick={clickHandler}
            className="custom-btn"
            style={{ width: width }}
        >
            {type === "move-back" && (
                <img
                    src={arrowLeft}
                    className="custom-btn__left-arrow"
                    alt="left-arrow"
                    width={14}
                    height={12}
                />
            )}
            {orderStatus === "sending"
                ? "Идет отправка..."
                : type === "move-back"
                ? "Вернуться назад"
                : "Оформить заказ"}
            {orderStatus === "sending" ? null : type === "place-order" ? (
                <img
                    src={arrowRight}
                    className="custom-btn__right-arrow"
                    alt="right-arrow"
                    width={14}
                    height={12}
                />
            ) : null}
        </button>
    );
};

export { CustomButton };
