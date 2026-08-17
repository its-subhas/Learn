import { createContext } from "react";

export const ItemContext = createContext({
  val: [],
  newtask: () => {},
  del: () => {},
});

const todoItemsContextProvider = ({ children }) => {};
export default todoItemsContextProvider;
