import "./PageTitle.scss";
import back from "../../assets/img/back.svg";
import backHover from "../../assets/img/back-hover.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PageTitleProps = {
    children: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
    const [img, setImg] = useState(back);
    const navigate = useNavigate();

    return (
        <div className="page-title">
            <button type="button" className="page-title__btn-back">
                <img
                    src={img}
                    alt="move-back"
                    width={35}
                    height={35}
                    onMouseEnter={() => setImg(backHover)}
                    onMouseLeave={() => setImg(back)}
                    onClick={() => navigate("/")}
                />
            </button>
            <h2 className="page-title__title">{children}</h2>
        </div>
    );
};

export { PageTitle };
