import { useCallback,  useReducer } from "react";
import { StorePostList } from "./StoreContext";

const DEFAULT_POST_LIST = [
  {
    userId: 0,
    title: "Love You !",
    body: "You Never Know How Much I Love You And I Do Untill My Last Breath.",
    reactions: "70",
    tags: ["Love", "Happy", "Feeling"],
  },
  {
    userId: 0.1,
    title: "Hate You !",
    body: "You Never Know How Much I Hate You And I Do Untill My Last Breath.",
    reactions: "80",
    tags: ["Hate", "Sad", "Anger"],
  },
];

const listActions = (currentPostList, action) => {
  let newcurrentPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newcurrentPostList = currentPostList.filter(
      (post) => post.userId !== action.payload.postId,
    );
  } else if (action.type === "ADD_POSTS") {
    let addposts = action.payload;
    newcurrentPostList = [...currentPostList, ...addposts];
  } else if (action.type === "ADD_POST") {
    let addPost = action.payload.post;
    newcurrentPostList = [addPost, ...newcurrentPostList];
  }
  return newcurrentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    listActions,
    DEFAULT_POST_LIST,
  );

  // const addPosts = (newPosts) => {
  //   dispatchPostList({
  //     type: "ADD_POSTS",
  //     payload: {
  //       newPosts: {
  //         userID: newPosts.id,
  //         title: newPosts.title,
  //         body: newPosts.body,
  //         tags: newPosts.tags,
  //         reactions: newPosts.views,
  //       },
  //     },
  //   });
  // };

  

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post: post,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId: postId,
        },
      });
    },
    [dispatchPostList],
  );

  //  let arr = [4,3,7,9];
  //  let sortedarr = useMemo(()=>{arr.sort()},[arr]);

  



  return (
    <StorePostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </StorePostList.Provider>
  );
};

export default PostListProvider;
