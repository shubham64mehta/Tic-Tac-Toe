import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameboard";
import Playerdetails from "./components/playerdetails";

function App() {
  const [activePlayeSymbol, setActivePlayerSymbol] = useState("X");

  function activePlayerHandler() {
    setActivePlayerSymbol((prevState) => {
      return prevState === "X" ? "O" : "X";
      // return symbol;
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
            activeSymbol={activePlayeSymbol}
          ></GameBoard>
        </div>
        Log
      </main>
    </>
  );
}

export default App;
