import React, { Component } from "react";
import VoteButton from "../VoteButton";
import "./style.scss";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    render() {
        const { current, handleClick, gameOver, isLoading } = this.props;
        if (!gameOver && !isLoading) {
            return (
                <section className="content">
                    <div className="card">
                        <div className="card__image">
                            <img src={current.image} alt="" />
                        </div>
                        <div className="card__content">
                            <div className="card__content__meta">
                                <h2 className="card__content__brand">
                                    {current.brand}
                                </h2>
                                <h2 className="card__content__name">
                                    {current.name}
                                </h2>
                            </div>

                            <div className="vote-buttons">
                                <VoteButton
                                    type="Nope"
                                    handleClick={handleClick}
                                />
                                <VoteButton
                                    type="Dope"
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        if (!gameOver && isLoading) {
            return (
                <section className="content">
                    <div className="card">
                        <div className="card__image">
                            <img
                                src="https://jonsatrom.files.wordpress.com/2012/03/beachballlarge-satrom.gif"
                                alt=""
                                className="placeholder__image"
                                width="100"
                                height="100"
                            />
                        </div>
                        <div className="card__content">
                            <div className="card__content__meta">
                                <h2 className="card__content__brand">
                                    <span className="placeholder__text" />
                                </h2>
                                <h2 className="card__content__name">
                                    <span className="placeholder__text" />
                                </h2>
                            </div>

                            <div className="vote-buttons">
                                <span className="placeholder__button" />
                                <span className="placeholder__button" />
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Card;
