import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
    },
    reducers : {
        getAllProducts: (state, action) => {
            state.allProducts = [...action.payload];
        },
    }
});

export const actions = productslice.actions;
export default productslice.reducer;