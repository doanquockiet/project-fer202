import { createSlice } from "@reduxjs/toolkit";
import menuData from "../../data/dataMenu";

const initialState = {
    selectedCategory: null,
    selectedType: null,
    products: menuData.categories.flatMap((category) =>
        category.types.map((type) => ({
            title: type.type,
            items: type.items,
        }))
    ),
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.selectedType = null;
            const category = menuData.categories[action.payload] || {};
            state.products = category.types
                ? category.types.map((type) => ({ title: type.type, items: type.items }))
                : initialState.products;
        },
        setType: (state, action) => {
            state.selectedType = action.payload;
            const category = menuData.categories[state.selectedCategory] || {};
            const type = category.types ? category.types[action.payload] : {};
            state.products = [{ title: type.type, items: type.items }];
        },
    },
});

export const { setCategory, setType } = menuSlice.actions;
export default menuSlice.reducer;
