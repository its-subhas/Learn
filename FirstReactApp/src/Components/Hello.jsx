function Hello() {
  let n1 = 5;
  let n2 = 5;

  function sum(n1, n2) {
    let ans = n1 + n2;
    return ans;
  }
  let Result = "Pass";

  return <>
  
  <h1>Sum Is: {sum(n1, n2)}</h1>
  <h4>Result: {Result}</h4>
  
  </>;
}

export default Hello;
