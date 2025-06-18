import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
        state.totalQuantity += 1;
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      state.totalQuantity -= state.items[id].quantity;
      delete state.items[id];
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;