import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    cartReducer,
    headerReducer,
    sneackersReducer,
    favoritesReducer,
    ordersReducer,
} from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    cartReducer,
    headerReducer,
    sneackersReducer,
    favoritesReducer,
    ordersReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
