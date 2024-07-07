import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameboard";
import Playerdetails from "./components/playerdetails";
import Log from "./components/log";

function App() {
  const [activePlayeSymbol, setActivePlayerSymbol] = useState("X");
  const [logManagement, setLogManagement] = useState([]);

  function activePlayerHandler(rowIndex, colIndex) {
    setActivePlayerSymbol((prevState) => {
      return prevState === "X" ? "O" : "X";
    });

    setLogManagement((prevState) => {
      let currentPlayer = "X";
      if (prevState.length && prevState[0].player === "X") {
        currentPlayer = "O";
      }
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
