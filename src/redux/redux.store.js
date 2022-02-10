import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer';

export default configureStore({
  reducer: cartReducer,
})
