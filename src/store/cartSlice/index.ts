import { createSlice } from '@reduxjs/toolkit';
import { CartReducerState } from './types';
import { RootState } from '../index';

export const CART_REDUCER_NAME = 'cart';

const initialState: CartReducerState = {
  totalQuantity: 5,
};

const cartSlice = createSlice({
  name: CART_REDUCER_NAME,
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },

    increaseTotalQuantity(state) {
      state.totalQuantity++;
    },
  },
});

const getState = (state: RootState) => state.cart;
const getTotalQuantity = (state: RootState) => state.cart.totalQuantity;

export const cartSelectors = {
  getState,
  getTotalQuantity,
};

export const cartActions = {
  ...cartSlice.actions,
};

export const cartReducer = cartSlice.reducer;
