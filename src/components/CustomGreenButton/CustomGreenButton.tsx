import "./CustomGreenButton.scss";
import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";

type ButtonProps = {
    type: "move-back" | "place-order";
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomGreenButton = (props: ButtonProps) => {
    const { type, onClick } = props;

    if (type === "move-back") {
        return (
            <button className="custom-btn" onClick={onClick}>
                <img
                    className="custom-btn__arrow-left"
                    src={arrowLeft}
                    alt="arrow-left"
                    width={14}
                    height={12}
                />
                Вернуться назад
            </button>
        );
    } else if (type === "place-order") {
        return (
            <button className="custom-btn" onClick={onClick}>
                <img
                    className="custom-btn__arrow-right"
                    src={arrowRight}
                    alt="arrow-right"
                    width={14}
                    height={12}
                />
                Оформить заказ
            </button>
        );
    } else {
        return null;
    }
};

export default CustomGreenButton;
