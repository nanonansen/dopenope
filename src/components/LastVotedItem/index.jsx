import React from "react";
import "./style.scss";

const LastVotedItem = ({ item }) => {
    const rndPercent = Math.floor(Math.random() * 100);
    if (item !== null) {
        return (
            <div className="last-item">
                <img src={item.image} alt="" />
                <div className="last-item__content">
                    <div className="last-item__title">
                        <span>{item.name}</span>
                        <span>{item.brand}</span>
                    </div>
                    <div className="last-item__vote-count">
                        <span>{rndPercent + "%"}</span>
                        {item.vote}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default LastVotedItem;
