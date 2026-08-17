import { useContext } from "react";
import Postcard from "./Postcard";
import { StorePostList } from "../Store/StoreContext";
import Welcome from "./Welcome";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const { postList } = useContext(StorePostList);
  // const postList = useLoaderData();
// console.log(postList.map(p => p.id));
  return (
    <>
      {/* {<Loading />} */}
      {postList.length === 0 && <Welcome />}
      { postList.map((post) => <Postcard key={post.id} post={post} />)}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((serverData) => {
      return serverData.posts;
    });
};


export default PostList;
