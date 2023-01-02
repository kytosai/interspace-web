import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer, CART_REDUCER_NAME } from './cartSlice';
import { categoryReducer, CATEGORY_REDUCER_NAME } from './categorySlice';

const rootReducer = combineReducers({
  [CART_REDUCER_NAME]: cartReducer,
  [CATEGORY_REDUCER_NAME]: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
