import { Header } from "../../components/Header";
import { Wrapp } from "../../components/Wrapp";
import { ProductsWrapp } from "../../components/ProductsWrapp";
import "./FavoritesPage.scss";
import { Card } from "../../components/Card";
import { EmptyPageNotification } from "../../components/EmptyPageNotification";
import { useSelector } from "react-redux";
import { Cart } from "../../components/Cart";
import { selectFavorites } from "../../redux/favorites/selector";
import { selectShowCart } from "../../redux/cart/selectors";
import { IProduct } from "../../assets/types";
import { PageTitle } from "../../components/PageTitle";

const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);
    const showCart = useSelector(selectShowCart);

    return (
        <Wrapp>
            <Header />
            {showCart && <Cart />}
            <div className="fav-page">
                {favorites.length ? (
                    <>
                        <PageTitle>Мои закладки</PageTitle>
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
