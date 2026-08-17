import Display from "./Display";
import Button from "./Button";
import css from "./Calculator.module.css";
import csss from "./App.module.css";
import { useState } from "react";

function Calculator() {
  let [calval, calmet] = useState("0");

  let buttonclick = (buttonpress) => {
    if (buttonpress === "C") {
      calmet("");
    } else if (buttonpress === "=") {
      let result = eval(calval);
      calmet(result);
    } else {
      let newcalval = calval + buttonpress;
      calmet(newcalval);
    }
  };

  return (
    <>
      <div className={csss.maindiv}>
        <div className={css.calculator}>
          <Display calval={calval} />
          <Button buttonclick={buttonclick} />
        </div>
      </div>
    </>
  );
}
export default Calculator;
