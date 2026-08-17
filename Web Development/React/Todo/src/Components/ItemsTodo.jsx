import { useContext } from "react";
import Tasks from "./Tasks";
import { ItemContext } from "../Store/ItemsContext";

function ItemsTodo() {

// let contextobj = useContext(ItemContext);
// let val = contextobj.val;
// let del = contextobj.del;

let {val,del} = useContext(ItemContext);


  return (
    <>
      {val.map((item, index) => (
        <Tasks key={index} task={item} del={() => del(item)} />
      ))}
    </>
  );
}
export default ItemsTodo;