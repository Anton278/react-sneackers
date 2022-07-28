import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FavoritesPage from "./pages/FavoritesPage";
import OrdersPage from "./pages/OrdersPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "./redux/cart/selectors";
import { useAppDispatch } from "./redux/store";
import { getProducts } from "./redux/asyncActions";
import { selectFavorites } from "./redux/favorites/selector";

const App = () => {
    if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", JSON.stringify([]));
    }
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const cart = useSelector(selectCart);
    const favorites = useSelector(selectFavorites);
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
