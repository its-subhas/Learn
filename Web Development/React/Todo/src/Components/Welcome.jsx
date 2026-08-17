import { useContext } from "react";
import { ItemContext } from "../Store/ItemsContext";
import css from "./Welcome.module.css";

function Welcome() {

  // let ContextObj =  useContext(ItemContext);
  // let val = ContextObj.val;

  let {val} =  useContext(ItemContext);

  return <div className={css.weldiv}> {val.length === 0 && <h1>Welcome !</h1>}</div>
}

export default Welcome;