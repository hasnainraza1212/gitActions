import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./../Slice/Slice.js"
import NewsReducer from "./../Slice/NewsSlice/NewsSlice.js"
import ProductsReducer from "./../Slice/ProductSlice/ProductSlice.js"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    news:NewsReducer,
    products:ProductsReducer
  },
})