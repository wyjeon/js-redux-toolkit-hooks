import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
  },
  reducers: {
    increase: state => {
      state.number = state.number + 1;
    },
    decrease: state => {
      state.number = state.number - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice;
