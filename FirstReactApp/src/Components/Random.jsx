function Random() {
  let num = Math.round(Math.random() * 100);
  return <h1 style={{ backgroundColor: "#464674" }}>Random Number: {num}</h1>;
}
export default Random;
