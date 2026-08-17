import css from "./Button.module.css";
import csss from "./ButtonDiv.module.css";

function Button({buttonclick}) {

  let buttonItems = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <>
      <div className={csss.buttondiv}>

        {buttonItems.map((button)=> (<button key={button} className={css.button} onClick={()=>buttonclick(button)}            >{button}</button>))}
      
      </div>
    </>
  );
}
export default Button;
