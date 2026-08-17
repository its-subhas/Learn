import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { CountVal: 0 },
  reducers: {
    increment: (state) => {
      state.CountVal++;
    },
    decrement: (state) => {
      state.CountVal--;
    },
    add: (state, action) => {
      state.CountVal += Number(action.payload);
    },
    sub: (state, action) => {
      state.CountVal -= Number(action.payload);
    },
    reset: (state) => {
      state.CountVal = 0;
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacy: (state) => {
      return !state;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;
