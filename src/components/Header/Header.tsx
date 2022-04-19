import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import logo from "./logo.png";
import {
    SET_CART_IMG_HOVER,
    SET_CART_IMG_PRIMARY,
    SET_SHOW_CART,
    SET_FAVORITES_PAGE_IMG_HOVER,
    SET_FAVORITES_PAGE_IMG_PRIMARY,
    SET_ORDERS_PAGE_IMG_HOVER,
    SET_ORDERS_PAGE_IMG_PRIMARY,
} from "../../actions";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cartReducer.cart);
    const cartImg = useSelector((state: any) => state.headerReducer.cartImg);
    const favoritesPageImg = useSelector(
        (state: any) => state.headerReducer.favoritesPageImg
    );
    const ordersPageImg = useSelector(
        (state: any) => state.headerReducer.ordersPageImg
    );
    const showCart = useSelector((state: any) => state.headerReducer.showCart);

    const getTotalPrice = () => {
        let totalPrice: number = 0;
        cart.forEach((sneackers: any) => {
            totalPrice += sneackers.price;
        });
        return totalPrice;
    };

    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo" width={40} height={40} />
                    <div className="header__text">
                        <div className="header__title">REACT SNEAKERS</div>
                        <div className="header__subtitle">
                            Магазин лучших кроссовок
                        </div>
                    </div>
                </div>
                <div className="header__buttons">
                    <div
                        className="header__cart"
                        onMouseOver={() =>
                            dispatch({ type: SET_CART_IMG_HOVER })
                        }
                        onMouseOut={() =>
                            dispatch({ type: SET_CART_IMG_PRIMARY })
                        }
                        onClick={() =>
                            dispatch({
                                type: SET_SHOW_CART,
                                payload: !showCart,
                            })
                        }
                    >
                        <img src={cartImg} alt="cart" width={18} height={18} />
                        {getTotalPrice()} грн.
                    </div>
                    <img
                        className="header__favorite"
                        src={favoritesPageImg}
                        alt="favorite"
                        onMouseOver={() =>
                            dispatch({ type: SET_FAVORITES_PAGE_IMG_HOVER })
                        }
                        onMouseOut={() =>
                            dispatch({ type: SET_FAVORITES_PAGE_IMG_PRIMARY })
                        }
                        onClick={() => navigate("/favorites")}
                        width={21}
                        height={19}
                    />
                    <img
                        className="header__account"
                        src={ordersPageImg}
                        alt="account"
                        onMouseOver={() =>
                            dispatch({ type: SET_ORDERS_PAGE_IMG_HOVER })
                        }
                        onMouseOut={() =>
                            dispatch({ type: SET_ORDERS_PAGE_IMG_PRIMARY })
                        }
                        onClick={() => navigate("/orders")}
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className="hr"></div>
        </>
    );
};

export default Header;
