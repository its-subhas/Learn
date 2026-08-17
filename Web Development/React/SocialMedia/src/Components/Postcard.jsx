import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { StorePostList } from "../Store/StoreContext";

const Postcard = ({ post }) => {
  const { deletePost } = useContext(StorePostList);

  return (
    <div className="card mypostcard">
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.userId)}
      >
        <MdDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-success mytags" key={tag}>
            {tag}
          </span>
        ))}
        {/* <div className="alert alert-success myreaction" role="alert">
          This Post has been Reacted by{" "}
          {post.reactions || post.reactions?.likes} Peoples.
        </div> */}
        <div className="alert alert-success myreaction" role="alert">
          👍 {post.reactions?.likes || post.reactions} Likes
        </div>
      </div>
    </div>
  );
};

export default Postcard;
