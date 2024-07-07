import { useState } from "react";

const Playerdetails = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  const buttonName = !isEditing ? "Edit" : "Save";

  const inputHandler = (event) => {
    setPlayerName((name) => (name = event.target.value));
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={inputHandler}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{buttonName}</button>
      </span>
    </li>
  );
};
export default Playerdetails;
