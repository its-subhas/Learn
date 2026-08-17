import css from "./AddDate.module.css";

function AddDate({getInpDateRef}) {
  return <div className="col-4"><input className={css.mydate} type="date" ref={getInpDateRef}
  
  /></div>
  
}
export default AddDate;