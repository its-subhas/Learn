import { useRef } from "react";

function App() {
  // const [p, setP] = useState("");

  let text = useRef();

  const data = (e) => {
    e.preventDefault(); // stop page refresh
    let currentval = text.current.value;
    console.log(currentval);
    text.current.value = "";
  };

  return (
    <form onSubmit={data}>
      <input
        type="text"
        placeholder="Enter Text !"
        // value={p}
        // onChange={(e) => setP(e.target.value)}
        
        ref={text}

      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;