import AddTodo from "./AddTodo";
import AddDate from "./AddDate";
import AddButton from "./AddButton";
import css from "./TodoContainer.module.css";
import Welcome from "./Welcome";
import ItemsTodo from "./ItemsTodo";
import { useRef,useReducer } from "react";
import { ItemContext } from "../Store/ItemsContext";

let reducerFunction = (currentval, action) => {
  let todoItems = currentval;
  if (action.type === "NEW_Items") {
    todoItems = [
      ...currentval,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DEL_ITEM") {
    todoItems = currentval.filter((items) => items !== action.payload);
  }

  return todoItems;
};

function TodoContainer() {
  let getInpTextRef = useRef();
  let getInpDateRef = useRef();
  // let tasks = [];
  // let [val, met] = useState(tasks);
  let [val, newItemDispatch] = useReducer(reducerFunction, []);

  let newtask = () => {
    const action = {
      type: "NEW_Items",
      payload: {
        task: getInpTextRef.current.value,
        date: getInpDateRef.current.value,
      },
    };
    newItemDispatch(action);
    getInpTextRef.current.value = "";
    getInpDateRef.current.value = "";

    // let newitem = {
    //   task: getInpTextRef.current.value,
    //   date: getInpDateRef.current.value,
    // };
    // met([...val, newitem]);
    // getInpTextRef.current.value = "";
    // getInpDateRef.current.value = "";
  };

  let del = (item) => {
    const action = {
      type: "DEL_ITEM",
      payload: item,
    };
    newItemDispatch(action);
    // let newArray = val.filter((items) => items !== item);
    // met(newArray);
  };

  return (
    <ItemContext.Provider
      value={{
        val: val,
        newtask: newtask,
        del: del,
      }}
    >
      <div className={`row ${css.myrow}`}>
        <AddTodo getInpTextRef={getInpTextRef} />
        <AddDate getInpDateRef={getInpDateRef} />
        <AddButton />
        <Welcome />
        <ItemsTodo />
      </div>
    </ItemContext.Provider>
  );
}

export default TodoContainer;
