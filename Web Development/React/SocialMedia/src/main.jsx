import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import './index.css'
import App from "./Routes/App.jsx";
import Post, { submitForm } from "./Components/Post.jsx";
import PostList, { postLoader } from "./Components/PostList.jsx";
// import postLoader from "./Components/PostList.jsx";

const router = createBrowserRouter([{ path: "/", element: <App />, children:[
  {path:"/",element: <PostList/>, loader: postLoader},
  {path:"/post",element: <Post />, action: submitForm}
]}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
