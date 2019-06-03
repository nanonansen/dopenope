import React from "react";
import "./style.scss";

const VotedList = ({ gameOver, votedItems, nextRound }) => {
    let rndRotate = () => {
        //return Math.floor(Math.random() * 45);
        let num = Math.floor(Math.random() * 25) + 1; // this will get a number between 1 and 99;
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // this will add minus sign in 50% of cases
        return num;
    };
    if (gameOver) {
        return (
            <section className="voted-items-list">
                <h2>Community Votes</h2>
                {votedItems.reverse().map((item, index) => {
                    return (
                        <div className="voted-items-list__item" key={index}>
                            <div className="item-image">
                                <span
                                    className="vote-float"
                                    style={{
                                        transform:
                                            "rotate(" +
                                            rndRotate() +
                                            "deg) translate(-50%, -50%)"
                                    }}
                                >
                                    {Math.floor(Math.random() * 100) + "% "}
                                    {item.vote}
                                </span>
                                <img src={item.image} alt="" />
                            </div>

                            <div className="item-content">
                                <div className="item-content__title">
                                    <div>{item.brand}</div>
                                    <div>{item.name}</div>
                                </div>

                                <div className="vote-count">
                                    <span>
                                        {Math.floor(Math.random() * 100) + "% "}
                                    </span>
                                    {item.vote}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <button onClick={nextRound} className="btn next-round">
                    Continue Voting
                </button>
            </section>
        );
    } else {
        return null;
    }
};

export default VotedList;
