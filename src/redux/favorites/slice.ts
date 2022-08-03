import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFavoritesInitState } from "../../utils/getFavoritesInitState";
import { IProduct } from "../../assets/types";

const initialState = getFavoritesInitState();

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IProduct>) {
            state.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<number>) {
            return state.filter(
                (product: IProduct) => product.id !== action.payload
            );
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
