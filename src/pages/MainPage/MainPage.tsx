import "./MainPage.scss";

import { Loader } from "../../components/Loader";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { Slider } from "../../components/Slider";
import { Card } from "../../components/Card";
import { Error } from "../../components/Error";
import { Wrapp } from "../../components/Wrapp";

import { useSelector } from "react-redux";
import { selectShowCart } from "../../redux/cart/selectors";
import {
    selectProductsStatus,
    selectProducts,
    selectErrorText,
} from "../../redux/products/selectors";

import { IProduct } from "../../assets/types";

const MainPage: React.FC = () => {
    const showCart = useSelector(selectShowCart);
    const productsStatus = useSelector(selectProductsStatus);
    const products = useSelector(selectProducts);
    const getProductsErrorText = useSelector(selectErrorText);

    if (productsStatus === "error") {
        return (
            <Wrapp>
                <Error>{getProductsErrorText}</Error>
            </Wrapp>
        );
    } else if (productsStatus === "loading") {
        return (
            <Wrapp>
                <Header />
                {showCart && <Cart />}
                <Slider />
                <div className="products-wrapp">
                    {/* for rendering 12 loading cards */}
                    {Array.from({ length: 12 }, (num: number) => (
                        <Loader key={num} />
                    ))}
                </div>
            </Wrapp>
        );
    } else if (productsStatus === "success") {
        return (
            <Wrapp>
                <Header />
                {showCart && <Cart />}
                <Slider />
                <div className="products-wrapp">
                    {products.map((product: IProduct) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </Wrapp>
        );
    } else return null;
};

export { MainPage };
