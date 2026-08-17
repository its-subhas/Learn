import css from "./NoFriends.module.css";

let NoFriends = (props) => {
return <>{props.nofriends.length === 0 && <h1 className={css["NF"]}>No Friends !</h1>}</>
}
export default NoFriends;