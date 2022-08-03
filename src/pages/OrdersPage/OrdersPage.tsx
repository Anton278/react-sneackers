import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { EmptyPageNotification } from "../../components/EmptyPageNotification";
import { Cart } from "../../components/Cart";
import { Wrapp } from "../../components/Wrapp";
import { ProductsWrapp } from "../../components/ProductsWrapp";
import { PageTitle } from "../../components/PageTitle";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/orders/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import { useAppDispatch } from "../../redux/store";
import { getOrders } from "../../redux/asyncActions";
import { ICartItem, IOrder, IProduct } from "../../assets/types";

const OrdersPage = () => {
    const orders = useSelector(selectOrders);
    const showCart = useSelector(selectShowCart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <Wrapp>
            <Header />
            {showCart && <Cart />}
            {orders.length ? (
                <>
                    <PageTitle>Мои покупки</PageTitle>
                    <ProductsWrapp>
                        {orders.map((order: IOrder) =>
                            order.products.map((product: ICartItem) => (
                                <Card {...product} key={product.id} />
                            ))
                        )}
                    </ProductsWrapp>
                </>
            ) : (
                <EmptyPageNotification page="orders" />
            )}
        </Wrapp>
    );
};

export { OrdersPage };
