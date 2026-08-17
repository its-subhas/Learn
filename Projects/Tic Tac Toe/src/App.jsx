import "./App.css";
import Game from "./Components/Game";
import GameContextProvider from "./Components/Store/GameContextProvider";

function App() {
  return (
    <>
      <GameContextProvider>
        <div className="app">
          <div className="heading">
            <h1>Tic Tac Toe</h1>
          </div>
          <Game />
        </div>
      </GameContextProvider>
    </>
  );
}

export default App;
