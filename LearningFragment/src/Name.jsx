import { useState } from "react";
import FNames from "./FNames";


let Name = (props) => {

  let [Val, met] = useState();
let click = ()=>{
 met("item");
};

  return (
    <ul className="list-group">
      {props.items.map((item) => (
           
          <FNames   key={item} fnames={item} click={click} cname={Val} />
          
      ))}
    </ul>
  );
};
export default Name;
