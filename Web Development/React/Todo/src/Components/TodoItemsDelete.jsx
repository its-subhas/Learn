import css from "./TodoItemsDelete.module.css";
import { MdDelete } from "react-icons/md";

function TodoItemsDelete({del,hil}) {
  return <div className="col-2"><button type="button" className={`btn btn-danger mybt ${css.mybtd}`} onClick={del}
  
  onDoubleClick={hil}
  
  ><MdDelete /></button></div>
}
export default TodoItemsDelete;