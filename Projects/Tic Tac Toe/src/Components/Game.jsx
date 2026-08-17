import { useContext } from "react";
import Square from "./Square";
import GameContext from "./Store/GameContext";

function Game() {
  const { num, con, handleClick, result, isDraw, play } =
    useContext(GameContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <Square handleClicked={() => handleClick(0)} value={num[0]} />
          <Square handleClicked={() => handleClick(1)} value={num[1]} />
          <Square handleClicked={() => handleClick(2)} value={num[2]} />
        </div>
        <div className="row">
          <Square handleClicked={() => handleClick(3)} value={num[3]} />
          <Square handleClicked={() => handleClick(4)} value={num[4]} />
          <Square handleClicked={() => handleClick(5)} value={num[5]} />
        </div>
        <div className="row">
          <Square handleClicked={() => handleClick(6)} value={num[6]} />
          <Square handleClicked={() => handleClick(7)} value={num[7]} />
          <Square handleClicked={() => handleClick(8)} value={num[8]} />
        </div>
      </div>

      <div className="result">
        {result ? (
          <div className="displayResults">
            <h4 className={result === "X" ? "x-mark" : "o-mark"}>
              {result} : You Won !
            </h4>
            <button className="playAgainButton" onClick={play}>
              Play Again !
            </button>
          </div>
        ) : isDraw ? (
          <div className="displayResults">
            <h4 className="gameDraw">Draw !</h4>
            <button className="playAgainButton" onClick={play}>
              Play Again !
            </button>
          </div>
        ) : (
          <div className="displayResults">
            <h4 className={con ? "x-mark" : "o-mark"}>
              {con ? "X" : "O"} : Your Turn !
            </h4>
            <button className="resetButton" onClick={play}>
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
