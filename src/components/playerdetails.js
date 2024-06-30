import { useState } from "react";

const Playerdetails = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing(!isEditing);
  };
  const buttonName = !isEditing ? "Edit" : "Save";
  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required></input>}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{buttonName}</button>
      </span>
    </li>
  );
};
export default Playerdetails;
