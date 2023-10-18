// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        // existingItem.quantity += newItem.quantity;
        existingItem.quantity += 1
      } else {
        // If it's a new item, add it to the cart
        newItem.quantity = 1; 
        state.items.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    }, incrementItemQuantity: (state, action) => {
      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.items.find((item) => item.id === itemIdToIncrement);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },

    decrementItemQuantity: (state, action) => {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.items.find((item) => item.id === itemIdToDecrement);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      } else {
        // Remove the item from the cart if quantity becomes zero
        // state.items = state.items.filter((item) => item.id !== itemIdToDecrement);
        itemToDecrement.quantity = 1;

      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart , incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
