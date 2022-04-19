import Header from "../../components/Header";
import "./OrdersPage.scss";
import buttonBackImg from "../../assets/img/back.svg";
import buttonBackHoverImg from "../../assets/img/back-hover.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SneackersBlock from "../../components/SneackersBlock";
import EmptyPageNotification from "../../components/EmptyPageNotification";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions";
import Cart from "../../components/Cart";

interface ISneackers {
    name: string;
    img: string;
    price: number;
    id: number;
}
interface IOrder {
    order: Array<ISneackers>;
    id: string;
}

const OrdersPage = () => {
    const [buttonBack, setButtonBack] = useState(buttonBackImg);
    const navigate = useNavigate();
    const orders = useSelector((state: any) => state.ordersReducer.orders);
    const showCart = useSelector((state: any) => state.headerReducer.showCart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    if (!orders.length) {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <EmptyPageNotification page="orders" />
            </div>
        );
    } else {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <main>
                    <div className="orders-page">
                        <div className="orders-page__header">
                            <img
                                src={buttonBack}
                                alt="button-back"
                                onMouseOver={() => {
                                    setButtonBack(buttonBackHoverImg);
                                }}
                                onMouseOut={() => {
                                    setButtonBack(buttonBackImg);
                                }}
                                onClick={() => {
                                    navigate("/");
                                }}
                            />
                            <span>Мои покупки</span>
                        </div>
                    </div>
                    <div className="sneackers-block-wrapp">
                        {orders.map((order: IOrder) => {
                            return order.order.map((sneackers: ISneackers) => (
                                <SneackersBlock
                                    name={sneackers.name}
                                    id={sneackers.id}
                                    price={sneackers.price}
                                    img={sneackers.img}
                                    key={sneackers.id}
                                />
                            ));
                        })}
                    </div>
                </main>
            </div>
        );
    }
};

export default OrdersPage;
