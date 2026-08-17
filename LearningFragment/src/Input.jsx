import css from "./Input.module.css";

function Input(props) {
return <>
<input type="text" placeholder="Add Friends !" className={css.myInput} onKeyDown={props.inp} />
{/* <p>{props.userinp}</p> */}
{/* <input type="text" placeholder="Add Friends !" className={css.myInput} onChange={props.inp} />
<p>{props.inp}</p> */}
</>
}
export default Input;