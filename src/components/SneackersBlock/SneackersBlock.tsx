import "./SneackersBlock.scss";
import { useState, useEffect } from "react";
import addButtonPrimary from "./img/add-button-primary.svg";
import addButtonHover from "./img/add-button-hover.svg";
import addButtonChecked from "./img/add-button-checked.svg";
import favoriteButtonPrimary from "./img/favorite-button-primary.svg";
import favoriteButtonHover from "./img/favorite-button-hover.svg";
import favoriteButtonChecked from "./img/favorite-button-checked.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    ADD_TO_FAVORITES,
    DELETE_FROM_FAVORITES,
    ADD_TO_CART,
    DELETE_FROM_CART,
} from "../../actions";

interface ISneackersBlockProps {
    name: string;
    price: number;
    img: string;
    id: number;
}

const SneackersBlock = (props: ISneackersBlockProps) => {
    const { name, price, img, id } = props;

    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.favoritesReducer);
    const cart = useSelector((state: any) => state.cartReducer.cart);

    const [favoriteButtonImg, setFavoriteButtonImg] = useState(() => {
        const isSneackersFavorite = favorites.find((sneackers: any) => {
            if (sneackers.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (isSneackersFavorite) {
            return favoriteButtonChecked;
        } else {
            return favoriteButtonPrimary;
        }
    });
    const [addButtonImg, setAddButtonImg] = useState(() => {
        const isSneackersInCart = cart.find((sneackers: any) => {
            if (sneackers.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (isSneackersInCart) {
            return addButtonChecked;
        } else {
            return addButtonPrimary;
        }
    });

    useEffect(() => {
        const isSneackersFavorite = favorites.find((sneackers: any) => {
            if (sneackers.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (isSneackersFavorite) {
            setFavoriteButtonImg(favoriteButtonChecked);
        } else {
            setFavoriteButtonImg(favoriteButtonPrimary);
        }
    }, [favorites]);
    useEffect(() => {
        const isSneackersInCart = cart.find((sneackers: any) => {
            if (sneackers.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (isSneackersInCart) {
            setAddButtonImg(addButtonChecked);
        } else {
            setAddButtonImg(addButtonPrimary);
        }
    }, [cart]);

    const favoriteButtonClickHandler = () => {
        if (favoriteButtonImg === favoriteButtonHover) {
            dispatch({
                type: ADD_TO_FAVORITES,
                payload: {
                    name: name,
                    img: img,
                    price: price,
                    id: id,
                },
            });
            setFavoriteButtonImg(favoriteButtonChecked);
        } else if (favoriteButtonImg === favoriteButtonChecked) {
            dispatch({
                type: DELETE_FROM_FAVORITES,
                payload: id,
            });
            setFavoriteButtonImg(favoriteButtonHover);
        }
    };
    const addButtonClickHandler = () => {
        if (addButtonImg === addButtonHover) {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    name: name,
                    img: img,
                    price: price,
                    id: id,
                },
            });
            setAddButtonImg(addButtonChecked);
        } else if (addButtonImg === addButtonChecked) {
            dispatch({
                type: DELETE_FROM_CART,
                payload: id,
            });
            setAddButtonImg(addButtonHover);
        }
    };

    return (
        <div className="sneackers-block">
            <div className="sneackers-block__img-wrapp">
                <img
                    className="sneackers-block__favorite-btn"
                    src={favoriteButtonImg}
                    alt="favorite-button"
                    width={30}
                    height={30}
                    onMouseOver={() => {
                        if (favoriteButtonImg === favoriteButtonPrimary) {
                            setFavoriteButtonImg(favoriteButtonHover);
                        }
                    }}
                    onMouseOut={() => {
                        if (favoriteButtonImg === favoriteButtonHover) {
                            setFavoriteButtonImg(favoriteButtonPrimary);
                        }
                    }}
                    onClick={favoriteButtonClickHandler}
                />
                <img src={img} alt={name} width={133} height={112} />
            </div>
            <p>{name}</p>
            <div className="sneackers-block__footer">
                <div className="sneackers-block__price">
                    <p>Цена:</p>
                    <b>{price} грн.</b>
                </div>
                <img
                    className="sneackers-block__btn"
                    src={addButtonImg}
                    alt="add-button"
                    width={32}
                    height={32}
                    onMouseOver={() => {
                        if (addButtonImg === addButtonPrimary) {
                            setAddButtonImg(addButtonHover);
                        }
                    }}
                    onMouseOut={() => {
                        if (addButtonImg === addButtonHover) {
                            setAddButtonImg(addButtonPrimary);
                        }
                    }}
                    onClick={addButtonClickHandler}
                />
            </div>
        </div>
    );
};

export default SneackersBlock;
