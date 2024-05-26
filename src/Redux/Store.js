import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Slice/cartSlice"
import likedProductsReducer from "./Slice/favouritesSlice"

const rootReducer = {
    cart: cartReducer,
    likedProducts : likedProductsReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store