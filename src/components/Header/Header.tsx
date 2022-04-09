import "./Header.scss";
import logo from "./img/logo.png";
import cartImg from "./img/cart.svg";
import cartHoverImg from "./img/cart-hover.svg";
import heartImg from "./img/heart.svg";
import heartHoverImg from "./img/heart-hover.svg";
import accountImg from "./img/account.svg";
import accountHoverImg from "./img/account-hover.svg";
import { useState } from "react";
import { SneackersItem } from "../../App";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
    cart: Array<SneackersItem>;
    setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setShowCart, cart }: HeaderProps) => {
    const navigate = useNavigate();
    const [cartIcon, setCartIcon] = useState(cartImg);
    const [favoriteIcon, setFavoriteIcon] = useState(heartImg);
    const [accountIcon, setAccountIcon] = useState(accountImg);

    const calcTotalPrice = (): number => {
        let totalPrice: number = 0;
        cart.forEach((sneackers: SneackersItem) => {
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
                        onMouseOver={() => setCartIcon(cartHoverImg)}
                        onMouseOut={() => setCartIcon(cartImg)}
                        onClick={() => {
                            if (typeof setShowCart === "function") {
                                setShowCart((prevValue: boolean) => !prevValue);
                            }
                        }}
                    >
                        <img src={cartIcon} alt="cart" width={18} height={18} />
                        {calcTotalPrice()} грн.
                    </div>
                    <img
                        className="header__favorite"
                        src={favoriteIcon}
                        alt="favorite"
                        onMouseOver={() => setFavoriteIcon(heartHoverImg)}
                        onMouseOut={() => setFavoriteIcon(heartImg)}
                        onClick={() => navigate("/favorite")}
                        width={21}
                        height={19}
                    />
                    <img
                        className="header__account"
                        src={accountIcon}
                        alt="account"
                        onMouseOver={() => setAccountIcon(accountHoverImg)}
                        onMouseOut={() => setAccountIcon(accountImg)}
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
