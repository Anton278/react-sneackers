import "./EmptyPageNotification.scss";
import ordersPageEmodji from "./orders-page-emodji.svg";
import favoritePageEmodji from "./favorite-page-emodji.svg";
import { useNavigate } from "react-router-dom";
import CustomGreenButton from "../CustomGreenButton";

type EmptyPageNotificationProps = {
    page: "orders" | "favorite";
};

const EmptyPageNotification = ({ page }: EmptyPageNotificationProps) => {
    const navigate = useNavigate();

    if (page === "favorite") {
        return (
            <div className="empty-page-notification">
                <div className="empty-page-notification__header">
                    <img
                        src={favoritePageEmodji}
                        alt="sad-emodji"
                        width={70}
                        height={70}
                    />
                </div>
                <div className="empty-page-notification__title">
                    Закладок нет :(
                </div>
                <div className="empty-page-notification__subtitle">
                    Вы ничего не добавляли в закладки
                </div>
                <CustomGreenButton
                    type="move-back"
                    onClick={() => navigate("/")}
                />
            </div>
        );
    } else if (page === "orders") {
        return (
            <div className="empty-page-notification">
                <div className="empty-page-notification__header">
                    <img src={ordersPageEmodji} alt="sad-emodji" />
                </div>
                <div className="empty-page-notification__title">
                    У вас нет заказов
                </div>
                <div className="empty-page-notification__subtitle">
                    Вы нищеброд?
                    <br />
                    Оформите хотя бы один заказ.
                </div>
                <CustomGreenButton
                    type="move-back"
                    onClick={() => navigate("/")}
                />
            </div>
        );
    } else {
        return null;
    }
};

export default EmptyPageNotification;
