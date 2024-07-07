import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameboard";
import Playerdetails from "./components/playerdetails";
import Log from "./components/log";

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [logManagement, setLogManagement] = useState([]);
  const activePlayeSymbol = derivedActivePlayer(logManagement);

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
          <GameBoard
            playerHandler={activePlayerHandler}
            management={logManagement}
          ></GameBoard>
        </div>
        <Log turns={logManagement}></Log>
      </main>
    </>
  );
}

export default App;
