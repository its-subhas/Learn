import { useRef } from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const privacy = () => {
    dispatch({ type: "PRIVACY" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const add = () => {
    dispatch({ type: "ADD", payload:{
      num: inputValue.current.value,
    } });
    inputValue.current.value ="";
  };

  const sub = () => {
    dispatch({ type: "SUB", payload:{
      num: inputValue.current.value,
    } });
    inputValue.current.value ="";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-success" onClick={increment}>
          +1
        </button>
        <button type="button" className="btn btn-danger" onClick={decrement}>
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={privacy}>Privacy</button>
        <button type="button" className="btn btn-warning" onClick={reset}>Reset</button>
      </div>

       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center inputdiv">
        <input type="text" className="myInput" placeholder="Enter Number to Add" ref={inputValue} />
         <button type="button" className="btn btn-success" onClick={add}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={sub}>
          SUB
        </button>
      </div>
    </>
  );
};

export default Button;