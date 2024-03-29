import "./Card.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { ICartItem, IProduct } from "../../assets/types";
import { selectFavorites } from "../../redux/favorites/selector";
import { selectCart } from "../../redux/cart/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { addProduct } from "../../redux/cart/slice";

import add from "../../assets/img/add.svg";
import addHover from "../../assets/img/add-hover.svg";
import addFilled from "../../assets/img/add-filled.svg";
import favorite from "../../assets/img/favorite.svg";
import favoriteHover from "../../assets/img/favorite-hover.svg";
import favoriteFilled from "../../assets/img/favorite-filled.svg";

type CardProps = {
    name: string;
    img: string;
    price: number;
    id: number;
    count?: number;
};

const Card: React.FC<CardProps> = (props) => {
    const { name, price, img, id, count } = props;

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

    const toggleAsFavorite = (): void => {
        if (favoriteButtonImg === favoriteFilled) {
            dispatch(removeFavorite(id));
        } else if (favoriteButtonImg === favoriteHover) {
            dispatch(addFavorite({ name, price, img, id }));
        }
    };

    useEffect(() => {
        const isProductInCart = cart.find(
            (product: ICartItem) => product.id === id
        );
        isProductInCart ? setAddButtonImg(addFilled) : setAddButtonImg(add);
    }, [cart]);

    useEffect(() => {
        const isProductFavorite = favorites.find(
            (product: IProduct) => product.id === id
        );
        isProductFavorite
            ? setFavoriteButtonImg(favoriteFilled)
            : setFavoriteButtonImg(favorite);
    }, [favorites]);

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
                    onClick={toggleAsFavorite}
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
                <div className="row">
                    <div className="card__col">
                        <p>Цена:</p>
                        <b>{price} грн.</b>
                    </div>
                    <button
                        type="button"
                        className="card__add-btn"
                        onMouseEnter={() =>
                            addButtonImg === add
                                ? setAddButtonImg(addHover)
                                : null
                        }
                        onMouseLeave={() =>
                            addButtonImg === addHover
                                ? setAddButtonImg(add)
                                : null
                        }
                        onClick={() =>
                            dispatch(
                                addProduct({
                                    ...props,
                                    count: 1,
                                })
                            )
                        }
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
                {Boolean(count) && (
                    <div className="row">
                        <p>Количество: {count}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export { Card };
