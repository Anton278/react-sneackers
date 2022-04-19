import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Slider from "../../components/Slider";
import SneackersBlock from "../../components/SneackersBlock";
import { getSneackers } from "../../actions";
import { useEffect } from "react";
import "./MainPage.scss";

interface ISneackers {
    name: string;
    price: number;
    img: string;
    id: number;
}

const MainPage = (props: any) => {
    const dispatch = useDispatch();
    const showCart = useSelector((state: any) => state.headerReducer.showCart);
    const isLoading = useSelector(
        (state: any) => state.sneackersReducer.isLoading
    );
    const sneackers = useSelector(
        (state: any) => state.sneackersReducer.sneackers
    );

    const renderLoadingCards = () => {
        return (
            <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
            </>
        );
    };

    useEffect(() => {
        dispatch(getSneackers());
    }, []);

    return (
        <div className="wrapp">
            <Header />
            {showCart && <Cart />}
            <main>
                <Slider />
                <div className="sneackers-block-wrapp">
                    {isLoading
                        ? renderLoadingCards()
                        : sneackers.map((sneackers: ISneackers) => (
                              <SneackersBlock
                                  name={sneackers.name}
                                  price={sneackers.price}
                                  img={sneackers.img}
                                  key={sneackers.id}
                                  id={sneackers.id}
                              />
                          ))}
                </div>
            </main>
        </div>
    );
};

export default MainPage;
