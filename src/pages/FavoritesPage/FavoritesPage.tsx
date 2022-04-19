import Header from "../../components/Header";
import buttonBackImg from "../../assets/img/back.svg";
import buttonBackHoverImg from "../../assets/img/back-hover.svg";
import { useState } from "react";
import "./FavoritesPage.scss";
import { useNavigate } from "react-router-dom";
import SneackersBlock from "../../components/SneackersBlock";
import EmptyPageNotification from "../../components/EmptyPageNotification";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart";

interface ISneackers {
    name: string;
    img: string;
    price: number;
    id: number;
}

const FavoritesPage = () => {
    const [buttonBack, setButtonBack] = useState(buttonBackImg);
    const navigate = useNavigate();
    const favorites = useSelector((state: any) => state.favoritesReducer);
    const showCart = useSelector((state: any) => state.headerReducer.showCart);

    if (!favorites.length) {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <EmptyPageNotification page="favorite" />
            </div>
        );
    } else {
        return (
            <div className="wrapp">
                <Header />
                {showCart && <Cart />}
                <main>
                    <div className="favorite-page">
                        <div className="favorite-page__header">
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
                            <span>Мои закладки</span>
                        </div>
                        <div className="sneackers-block-wrapp">
                            {favorites.map((sneackers: ISneackers) => (
                                <SneackersBlock
                                    key={sneackers.id}
                                    name={sneackers.name}
                                    price={sneackers.price}
                                    img={sneackers.img}
                                    id={sneackers.id}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
};

export default FavoritesPage;
