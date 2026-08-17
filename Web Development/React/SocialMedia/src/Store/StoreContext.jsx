import { createContext } from "react";

export const StorePostList = createContext({
  postList: [],
  addPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
});
