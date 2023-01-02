import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryReducerState } from './types';
import { RootState } from '../index';

export const CATEGORY_REDUCER_NAME = 'category';

const initialState: CategoryReducerState = {
  productLayout: 'list',
};

const categorySlice = createSlice({
  name: CATEGORY_REDUCER_NAME,
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },

    changeProductLayout(
      state,
      action: PayloadAction<CategoryReducerState['productLayout']>,
    ) {
      state.productLayout = action.payload;
    },
  },
});

const getState = (state: RootState) => state.category;
const getProductLayout = (state: RootState) => state.category.productLayout;

export const categorySelectors = {
  getState,
  getProductLayout,
};

export const categoryActions = {
  ...categorySlice.actions,
};

export const categoryReducer = categorySlice.reducer;
