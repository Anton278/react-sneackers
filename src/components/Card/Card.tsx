import "./Card.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { ICartItem, IProduct } from "../../assets/types";
import { selectFavorites } from "../../redux/favorites/selector";
import { selectCart } from "../../redux/cart/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { addProduct } from "../../redux/cart/slice";

import add from "./add.svg";
import addHover from "./add-hover.svg";
import addFilled from "./add-filled.svg";
import favorite from "./favorite.svg";
import favoriteHover from "./favorite-hover.svg";
import favoriteFilled from "./favorite-filled.svg";

const Card = (props: IProduct): JSX.Element => {
    const { name, price, img, id } = props;

    const dispatch = useAppDispatch();
    const favorites = useSelector(selectFavorites);
    const cart = useSelector(selectCart);

    const [favoriteButtonImg, setFavoriteButtonImg] = useState(() => {
        const isProductFavorite = favorites.find((product: IProduct) => {
            return product.id === id ? true : false;
        });
        return isProductFavorite ? favoriteFilled : favorite;
    });
    const [addButtonImg, setAddButtonImg] = useState(() => {
        const isProductInCart = cart.find((product: ICartItem) => {
            return product.id === id ? true : false;
        });
        return isProductInCart ? addFilled : add;
    });

    const favoriteButtonHandler = (): void => {
        if (favoriteButtonImg === favoriteFilled) {
            dispatch(removeFavorite(id));
        } else if (favoriteButtonImg === favoriteHover) {
            dispatch(addFavorite({ name, price, img, id }));
        }
        setFavoriteButtonImg((prevImg: string) => {
            if (prevImg === favoriteHover) {
                return favoriteFilled;
            } else if (prevImg === favoriteFilled) {
                return favoriteHover;
            } else {
                return prevImg;
            }
        });
    };
    const addButtonHandler = (): void => {
        dispatch(
            addProduct({
                name,
                img,
                price,
                id,
                count: 1,
            })
        );
        setAddButtonImg((prevImg: string) => {
            if (prevImg === addHover) {
                return addFilled;
            }
            return prevImg;
        });
    };

    return (
        <div className="card">
            <div className="card__img-wrapp">
                <button
                    type="button"
                    className="card__favorite-btn"
                    onMouseEnter={() =>
                        favoriteButtonImg === favorite
                            ? setFavoriteButtonImg(favoriteHover)
                            : null
                    }
                    onMouseLeave={() =>
                        favoriteButtonImg === favoriteHover
                            ? setFavoriteButtonImg(favorite)
                            : null
                    }
                    onClick={favoriteButtonHandler}
                >
                    <img
                        className="card__btn-img"
                        src={favoriteButtonImg}
                        alt="favorite"
                        width={32}
                        height={32}
                    />
                </button>
                <img src={img} alt={name} width={133} height={112} />
            </div>
            <p className="card__title">{name}</p>
            <div className="card__footer">
                <div className="card__col">
                    <p>Цена:</p>
                    <b>{price} грн.</b>
                </div>
                <button
                    type="button"
                    className="card__add-btn"
                    onMouseEnter={() =>
                        addButtonImg === add ? setAddButtonImg(addHover) : null
                    }
                    onMouseLeave={() =>
                        addButtonImg === addHover ? setAddButtonImg(add) : null
                    }
                    onClick={addButtonHandler}
                >
                    <img
                        className="card__add-img"
                        src={addButtonImg}
                        alt="add"
                        width={32}
                        height={32}
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
