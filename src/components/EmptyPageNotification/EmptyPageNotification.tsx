import "./EmptyPageNotification.scss";

import ordersPageEmodji from "../../assets/img/orders-page-emodji.svg";
import favoritesPageEmodji from "../../assets/img/favorite-page-emodji.svg";

import { useNavigate } from "react-router-dom";

import { CustomButton } from "../CustomButton";

type EmptyPageNotificationProps = {
    page: "orders" | "favorites";
};

const EmptyPageNotification: React.FC<EmptyPageNotificationProps> = (props) => {
    const navigate = useNavigate();
    const { page } = props;

    return (
        <div className="empty-page-box">
            <img
                src={
                    page === "favorites"
                        ? favoritesPageEmodji
                        : ordersPageEmodji
                }
                alt="sad-emodji"
                width={70}
                height={70}
            />
            <h3 className="empty-page-box__title">
                {page === "favorites" ? "Закладок нет :(" : "У вас нет заказов"}
            </h3>
            <h5 className="empty-page-box__subtitle">
                {page === "favorites"
                    ? "Вы ничего не добавляли в закладки"
                    : "Оформите хотя бы один заказ."}
            </h5>
            <CustomButton
                width="245px"
                type="move-back"
                clickHandler={() => navigate("/")}
            ></CustomButton>
        </div>
    );
};

export { EmptyPageNotification };
