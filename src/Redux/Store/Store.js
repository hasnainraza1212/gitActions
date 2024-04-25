import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./../Slice/Slice.js"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})