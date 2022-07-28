import sliderImg1 from "../../assets/img/slider-img-1.png";
import forward from "../../assets/img/forward.svg";
import "./Slider.scss";

const Slider = () => {
    return (
        <div className="slider">
            <img
                className="slider__img"
                src={sliderImg1}
                alt="silder-img-1"
                width="100%"
                height="100%"
            />
            <button className="slider__move-forward">
                {/* find another img */}
                <img
                    className="slider__move-forward-img"
                    src={forward}
                    alt="arrow-button"
                    width={35}
                    height={35}
                />
            </button>
        </div>
    );
};

export { Slider };
