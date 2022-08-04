import { addFavorite, removeFavorite } from "./slice";
import { store } from "../store";

describe("favoritesSlice should", () => {
    test("set int state", () => {
        const favorites = store.getState().favorites;
        expect(favorites).toEqual([]);
    });
    test("handle addFavorite case", () => {
        store.dispatch(
            addFavorite({
                name: "sneackers-1",
                img: "some-url",
                price: 3000,
                id: 1,
            })
        );
        expect(store.getState().favorites).toEqual([
            {
                name: "sneackers-1",
                img: "some-url",
                price: 3000,
                id: 1,
            },
        ]);
    });
    test("handle removeFavorite case", () => {
        store.dispatch(removeFavorite(1));
        expect(store.getState().favorites).toEqual([]);
    });
});
