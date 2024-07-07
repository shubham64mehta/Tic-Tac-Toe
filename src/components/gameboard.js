const GameBoard = ({ playerHandler, management }) => {
  return (
    <ol id="game-board">
      {management.map((row, rowIndex) => {
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
