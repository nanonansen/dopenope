import React from "react";
import "./style.scss";

const VoteButton = ({ type, handleClick }) => {
    return (
        <button onClick={handleClick} value={type}>
            <span>{type === "Dope" ? "▲" : "▼"}</span>
            {type}
        </button>
    );
};

export default VoteButton;
