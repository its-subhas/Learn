import { useContext } from "react";
import css from "./AddButton.module.css";
import { IoAddOutline } from "react-icons/io5";
import { ItemContext } from "../Store/ItemsContext";

function AddButton() {
  let contextobj = useContext(ItemContext);
  let newtask = contextobj.newtask;

  return (
    <div className="col-2">
      <button
        type="button"
        className={`btn btn-success ${css.mybt}`}
        onClick={newtask}
      >
        <IoAddOutline />
      </button>
    </div>
  );
}
export default AddButton;
