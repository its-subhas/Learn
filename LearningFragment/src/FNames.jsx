import css from "./Items.module.css";
import csss from "./Color.module.css";

let FNames = (props) => {

  

//   let clickbutton = ()=> {
// console.log(`Clicked On ${props.fnames}`)
//   }

  return <li className={`list-group-item ${css["myitems"]} ${csss[`${props.cname}`]}`}>{props.fnames} <button className={`${css.button}`} onClick={props.click}>Okay</button></li>;
};
export default FNames;
