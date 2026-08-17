import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Button from "./Components/Buttons";
import Container from "./Components/Container";
import { useSelector } from "react-redux";
import Privacy from "./Components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          {privacy ? <Privacy /> : <DisplayCounter />}
          <Button />
        </Container>
      </div>
    </center>
  );
}

export default App;
