import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
    quantityTotal: 0, // Initialize total quantity to 0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.quantityTotal = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
      state.quantityTotal = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      state.quantityTotal = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
