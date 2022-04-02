import "./SneackersBlock.scss";
import { useState } from "react";

import addButtonPrimary from "./img/add-button-primary.svg";
import addButtonHover from "./img/add-button-hover.svg";
import addButtonChecked from "./img/add-button-checked.svg";

import favoriteButtonPrimary from "./img/favorite-button-primary.svg";
import favoriteButtonChecked from "./img/favorite-button-checked.svg";
import favoriteButtonHover from "./img/favorite-button-hover.svg";

type SneackersBlockProps = {
    name: string;
    price: number;
    img: string;
};

const SneackersBlock = ({ name, price, img }: SneackersBlockProps) => {
    const [addButton, setAddButton] = useState(addButtonPrimary);
    const [favoriteButton, setFavoriteButton] = useState(favoriteButtonPrimary);

    return (
        <div className="sneackers-block">
            <div className="sneackers-block__img-wrapp">
                <img
                    className="sneackers-block__favorite-btn"
                    src={favoriteButton}
                    alt="favorite-button"
                    width={30}
                    height={30}
                    onMouseOver={() => {
                        if (favoriteButton === favoriteButtonPrimary) {
                            setFavoriteButton(favoriteButtonHover);
                        }
                    }}
                    onMouseOut={() => {
                        if (favoriteButton === favoriteButtonHover) {
                            setFavoriteButton(favoriteButtonPrimary);
                        }
                    }}
                    onClick={() => {
                        if (favoriteButton === favoriteButtonHover) {
                            setFavoriteButton(favoriteButtonChecked);
                        } else if (favoriteButton === favoriteButtonChecked) {
                            setFavoriteButton(favoriteButtonHover);
                        }
                    }}
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
                    src={addButton}
                    alt="add-button"
                    width={32}
                    height={32}
                    onMouseOver={() => {
                        if (addButton === addButtonPrimary) {
                            setAddButton(addButtonHover);
                        }
                    }}
                    onMouseOut={() => {
                        if (addButton === addButtonHover) {
                            setAddButton(addButtonPrimary);
                        }
                    }}
                    onClick={() => {
                        if (addButton === addButtonHover) {
                            setAddButton(addButtonChecked);
                        } else if (addButton === addButtonChecked) {
                            setAddButton(addButtonHover);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default SneackersBlock;
