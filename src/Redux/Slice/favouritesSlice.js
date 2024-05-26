import { createSlice } from "@reduxjs/toolkit";

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState: [],
  reducers: {
    addToLikedProducts(state, action) {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        // Return a new array with the new product appended
        return [...state, product];
      }
      // If the product already exists, return the existing state
      return state;
    },
    removeFromLikedProducts(state, action) {
      const productId = action.payload;
      // Return a new array without the product with the given id
      return state.filter((item) => item.id !== productId);
    },
  },
});

export const { addToLikedProducts, removeFromLikedProducts } = likedProductsSlice.actions;

export default likedProductsSlice.reducer;
