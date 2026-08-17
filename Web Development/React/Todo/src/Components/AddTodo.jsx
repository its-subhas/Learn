import css from "./AddTodo.module.css";

function AddTodo({getInpTextRef}) {
  return <div className="col-6"><input className={css.myinput} type="text" placeholder="Add Tasks !"   
  
  ref={getInpTextRef}
  
  /></div>
}
export default AddTodo;