import { useRef } from "react";
import { counterAction, privacyAction } from "../Store";
import { useDispatch } from "react-redux";

const Button = () => {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  const privacy = () => {
    dispatch(privacyAction.privacy());
  };

  const reset = () => {
    dispatch(counterAction.reset());
  };

  const add = () => {
    dispatch(counterAction.add(inputValue.current.value));
    inputValue.current.value = "";
  };

  const sub = () => {
    dispatch(counterAction.sub(inputValue.current.value));
    inputValue.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button className="btn btn-success" onClick={increment}>
          +1
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          -1
        </button>
        <button className="btn btn-warning" onClick={privacy}>
          Privacy
        </button>
        <button className="btn btn-warning" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center inputdiv">
        <input
          type="text"
          className="myInput"
          placeholder="Enter Number to Add"
          ref={inputValue}
        />
        <button className="btn btn-success" onClick={add}>
          ADD
        </button>
        <button className="btn btn-danger" onClick={sub}>
          SUB
        </button>
      </div>
    </>
  );
};

export default Button;
