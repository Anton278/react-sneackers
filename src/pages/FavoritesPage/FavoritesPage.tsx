import { Header } from "../../components/Header";
import { Wrapp } from "../../components/Wrapp";
import { ProductsWrapp } from "../../components/ProductsWrapp";
import buttonBackImg from "../../assets/img/back.svg";
import buttonBackHoverImg from "../../assets/img/back-hover.svg";
import { useState } from "react";
import "./FavoritesPage.scss";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { EmptyPageNotification } from "../../components/EmptyPageNotification";
import { useSelector } from "react-redux";
import { Cart } from "../../components/Cart";
import { selectFavorites } from "../../redux/favorites/selector";
import { selectShowCart } from "../../redux/cart/selectors";
import { IProduct } from "../../assets/types";

const FavoritesPage = () => {
    const [buttonBack, setButtonBack] = useState(buttonBackImg);
    const navigate = useNavigate();
    const favorites = useSelector(selectFavorites);
    const showCart = useSelector(selectShowCart);

    return (
        <Wrapp>
            <Header />
            {showCart && <Cart />}
            <div className="fav-page">
                {favorites.length ? (
                    <>
                        <div className="fav-page__header">
                            <button type="button" className="fav-page__btn">
                                <img
                                    src={buttonBack}
                                    alt="button-back"
                                    width={35}
                                    height={35}
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
                            </button>
                            <h2 className="fav-page__title">Мои закладки</h2>
                        </div>
                        <ProductsWrapp>
                            {favorites.map((product: IProduct) => (
                                <Card {...product} key={product.id} />
                            ))}
                        </ProductsWrapp>
                    </>
                ) : (
                    <EmptyPageNotification page="favorites" />
                )}
            </div>
        </Wrapp>
    );
};

export { FavoritesPage };
