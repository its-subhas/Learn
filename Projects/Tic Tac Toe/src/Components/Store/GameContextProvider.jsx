import GameContext from "./GameContext";
import { useState } from "react";

const GameContextProvider = ({ children }) => {
  const [num, setNum] = useState(Array(9).fill(null));
  const [con, setCon] = useState(true);

  const handleClick = (index) => {
    if (result || isDraw) {
      return;
    }
    if (num[index] !== null) {
      return;
    }
    const copyArray = [...num];
    copyArray[index] = con ? "X" : "O";
    setNum(copyArray);
    setCon(!con);
  };

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const index of winner) {
      const [a, b, c] = index;
      if (num[a] !== null && num[a] === num[b] && num[a] === num[c]) {
        return num[a];
      }
    }
    return null;
  };

  const result = checkWinner();
  const isDraw = !result && num.every((cell) => cell !== null);

  const play = () => {
    setNum(Array(9).fill(null));
    setCon(true);
  };

  return (
    <GameContext.Provider
      value={{ num, con, handleClick, result, isDraw, play }}
    >
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
