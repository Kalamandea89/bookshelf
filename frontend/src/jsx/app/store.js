import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import reducers from '../reducers'

export default configureStore({
  reducer: reducers,
});
