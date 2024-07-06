import "./App.css";
import GameBoard from "./components/gameboard";
import Playerdetails from "./components/playerdetails";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Playerdetails name="Player 1" symbol="X"></Playerdetails>
            <Playerdetails name="Player 2" symbol="O"></Playerdetails>
          </ol>
          <GameBoard></GameBoard>
        </div>
        Log
      </main>
    </>
  );
}

export default App;
