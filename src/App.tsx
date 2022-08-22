import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { MainPage } from "./pages/MainPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { OrdersPage } from "./pages/OrdersPage";

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
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
        </Routes>
    );
};

export default App;
