import { createSlice } from "@reduxjs/toolkit";

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState: [],
  reducers: {
    addToLikedProducts(state, action) {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
    },
    removeFromLikedProducts(state, action) {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
  },
});

export const { addToLikedProducts, removeFromLikedProducts } = likedProductsSlice.actions;

export default likedProductsSlice.reducer;