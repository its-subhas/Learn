import { createStore } from "redux";

const INITIAL_VALUE = {
  count: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, count: store.count + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, count: store.count - 1 };
  } else if (action.type === "ADD") {
    newStore = {
      ...store,
      count: store.count + Number(action.payload.num),
    };
  } else if (action.type === "SUB") {
    newStore = {
      ...store,
      count: store.count - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY") {
    newStore = { ...store, privacy: !store.privacy };
  } else if (action.type === "RESET") {
    newStore = INITIAL_VALUE;
  }
  return newStore;
};
const counterStore = createStore(counterReducer);

export default counterStore;
