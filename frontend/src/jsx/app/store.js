import { configureStore } from '@reduxjs/toolkit';
import reducers from '../slices'
// import logger from 'redux-logger'
// import counterReducer from '../slices/counterSlice';
// import preloadedState from './preloadedState'

export default configureStore({
  reducer: reducers,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// devTools: process.env.NODE_ENV !== 'production',
//     preloadedState,