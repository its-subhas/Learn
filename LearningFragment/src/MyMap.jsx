import Heading from "./Heading";
import Name from "./Name";
import NoFriends from "./NoFriends";
import Container from "./Container";
import Input from "./Input";
import { useState } from "react";
function MyMap() {
  // if (items.length === 0) {
  //   return <h1>No Friends !</h1>
  // }

  // let empty = (items.length === 0) ? <h1>No Friends !</h1> : null;

  let items = ["Muskan", "Priya", "Ankit", "Krit", "Guddu"];

//  let [valueText, methodText] = useState("Enter Friends !");
// // items.push(valueText);

//  console.log(valueText);

//   let inp = (event)=>{
//     console.log(event.target.value)
//     methodText(event.target.value);
//   };

let [arrval, arrmethod] = useState(items);

  let inphand = (event)=> {
   if (event.key === "Enter") {
    let friend = event.target.value;
    event.target.value = "";
    let newfriendsarr = [...arrval,friend];
     arrmethod(newfriendsarr);
   }
  };


  return (
    <>
    <Container>
      <Heading />
      {/* <Input inp={inp} userinp={valueText}/> */}
       <Input inp={inphand}/>
       <Name items={arrval}/>
      <NoFriends nofriends={arrval}/>
      {/* <Name items={items}/>
      <NoFriends nofriends={items}/> */}
      
      {/* { empty} */}
    </Container>

<Container>
  <p>Hello From React !</p>
</Container>

<Container>
  <p>Hello From Guddu !</p>
</Container>

    </>
  );
}

export default MyMap;
