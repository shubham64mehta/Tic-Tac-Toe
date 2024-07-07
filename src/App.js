import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameboard";
import Playerdetails from "./components/playerdetails";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winningcombination";
import Gameover from "./components/gamerover";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

let winner = null;
let hasDraw = false;
function App() {
  const [logManagement, setLogManagement] = useState([]);
  const activePlayeSymbol = derivedActivePlayer(logManagement);

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  if (logManagement.length) {
    for (const value of logManagement) {
      const { square, player } = value;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstValue = gameBoard[combination[0].row][combination[0].column];
    const secondValue = gameBoard[combination[1].row][combination[1].column];
    const thirdValue = gameBoard[combination[2].row][combination[2].column];
    if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
      winner = firstValue;
    }
  }

  hasDraw = logManagement.length === 9 && !winner;
  function activePlayerHandler(rowIndex, colIndex) {
    setLogManagement((prevState) => {
      const currentPlayer = derivedActivePlayer(prevState);
      const updatedLogManagement = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];
      return updatedLogManagement;
    });
  }

  function handleRestart() {
    setLogManagement([]);
    winner = null;
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Playerdetails
              name="Player 1"
              symbol="X"
              isActive={activePlayeSymbol === "X"}
            ></Playerdetails>
            <Playerdetails
              name="Player 2"
              symbol="O"
              isActive={activePlayeSymbol === "O"}
            ></Playerdetails>
          </ol>
          {(winner || hasDraw) && (
            <Gameover winner={winner} restart={handleRestart}></Gameover>
          )}
          <GameBoard
            playerHandler={activePlayerHandler}
            management={gameBoard}
          ></GameBoard>
        </div>
        <Log turns={logManagement}></Log>
      </main>
    </>
  );
}

export default App;
