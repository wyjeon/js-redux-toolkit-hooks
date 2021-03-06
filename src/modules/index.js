import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './count';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
