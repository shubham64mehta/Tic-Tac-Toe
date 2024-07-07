const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ playerHandler, management }) => {
  let gameBoard = initialGameBoard;
  if (management.length) {
    for (const value of management) {
      const { square, player } = value;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
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
                        playerHandler(rowIndex, colIndex);
                      }}
                      disabled={column != null}
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
