import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { StorePostList } from "../Store/StoreContext";

const Post = () => {
//   const { addPost } = useContext(StorePostList);
//  addPost(action);
  return (
    <Form method="post" className="post">
      <h1 className="newpostheading">New Post</h1>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h3 className="titalheading">ID</h3>
        </label>
        <input
          type="text"
          name="userId"
          placeholder="Enter Post ID Here."
          className="form-control myinput"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h3 className="titalheading">Title</h3>
        </label>

        <input
          type="text"
          name="title"
          placeholder="Enter Post Title Here."
          className="form-control myinput"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h3 className="titalheading">Thought</h3>
        </label>
        <input
          type="text"
          name="body"
          placeholder="Share Your Thoughts Hear."
          className="form-control myinput"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h3 className="titalheading">Tags</h3>
        </label>
        <input
          type="text"
          name="tags"
          placeholder="Enter Tags."
          className="form-control myinput"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h3 className="titalheading">Reactions</h3>
        </label>
        <input
          type="text"
          name="reaction"
          placeholder="Enter Reactions."
          className="form-control myinput"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary postbutton">
          Post
        </button>
      </div>
    </Form>
  );
};

// import { redirect } from "react-router-dom";

export async function submitForm(data) {
  const formdata = await data.request.formData();
  const myformdata = Object.fromEntries(formdata);

  myformdata.tags = myformdata.tags.split(" ");

  await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myformdata),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // addPost(post);
    });

  return redirect("/");
}

export default Post;
