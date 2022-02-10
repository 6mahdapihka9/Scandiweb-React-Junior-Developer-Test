import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'cartManager',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter( object => object.id !== action.payload);
    },
    changeObjectInCart: (state, action) => {
      state.value = state.value.map(object => (object.id === action.payload.id)? action.payload : object );
    },
  },
});

export const { addToCart, removeFromCart, changeObjectInCart } = slice.actions;

export const getObjectFromCart = state => state.cartManager.value;

export default slice.reducer;
