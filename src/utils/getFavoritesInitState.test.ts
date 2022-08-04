import { getFavoritesInitState } from "./getFavoritesInitState";

describe("getFavoritesInitState should", () => {
    test("return data", () => {
        const favorites = [
            { name: "sneackers-1", img: "", price: 3000, id: 1 },
        ];
        Storage.prototype.getItem = jest.fn(() => JSON.stringify(favorites));

        expect(getFavoritesInitState()).toEqual(favorites);
    });
    test("return empty array", () => {
        Storage.prototype.getItem = jest.fn(() => null);
        expect(getFavoritesInitState()).toEqual([]);
    });
});
