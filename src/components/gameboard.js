import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function selectHandler(rowIndex, colIndex) {
    setGameBoard((prevState) => {
      const updateStateBoard = [
        ...prevState.map((innerValue) => {
          return [...innerValue];
        }),
      ];
      updateStateBoard[rowIndex][colIndex] = "X";
      return updateStateBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((column, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        selectHandler(rowIndex, colIndex);
                      }}
                    >
                      {column}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
