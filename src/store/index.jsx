
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer, // Add other reducers if needed
  },
});
