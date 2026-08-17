import css from  "./Display.module.css";

function Display({calval}) {
return <input className={css.display} type="text" value={calval} readOnly/>
}
export default Display;