import sliderImg1 from "./slider-img-1.png";
import arrowButton from "./arrow-button.svg";
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
            <img
                className="slider__btn"
                src={arrowButton}
                alt="arrow-button"
                width={35}
                height={35}
            />
        </div>
    );
};

export default Slider;
