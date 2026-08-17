function Game({ handleClicked, value }) {
  return (
    <>
      <div className="square" onClick={handleClicked}>
        <h1
          className={value === "X" ? "x-mark" : value === "O" ? "o-mark" : ""}
        >
          {value}
        </h1>
      </div>
    </>
  );
}

export default Game;
