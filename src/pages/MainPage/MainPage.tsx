import "./MainPage.scss";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Slider from "../../components/Slider";
import Card from "../../components/Card";
import { selectShowCart } from "../../redux/cart/selectors";
import {
    selectStatus,
    selectProducts,
    selectErrorTypeAndMessage,
} from "../../redux/products/selectors";
import { IProduct } from "../../assets/types";

const MainPage = () => {
    const showCart = useSelector(selectShowCart);
    const status = useSelector(selectStatus);
    const products = useSelector(selectProducts);
    const errorTypeAndMessage = useSelector(selectErrorTypeAndMessage);

    const renderLoadingCards = (): JSX.Element => {
        return (
            <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
            </>
        );
    };

    if (status === "error") {
        return (
            <div className="wrapp">
                <div className="error">
                    <p className="error__head">{errorTypeAndMessage}</p>
                    <p className="error__body">Sorry, try again later.</p>
                </div>
            </div>
        );
    } else if (status === "loading") {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <main>
                    <Slider />
                    <div className="products-wrapp">{renderLoadingCards()}</div>
                </main>
            </div>
        );
    } else {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <main>
                    <Slider />
                    <div className="products-wrapp">
                        {products.map((product: IProduct) => (
                            <Card key={product.id} {...product} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }
};

export default MainPage;
