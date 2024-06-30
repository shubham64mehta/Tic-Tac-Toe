import "./App.css";
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
          Game Board
        </div>
        Log
      </main>
    </>
  );
}

export default App;
