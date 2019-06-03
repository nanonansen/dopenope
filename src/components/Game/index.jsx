import React, { Component } from "react";
import Card from "../Card";

import "./style.scss";
import Header from "../Header";
import VotedList from "../VotedList";

//import Data from "../../Data.js";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalData: null,
            data: [],
            votedItems: [],
            current: {},
            gameOver: false,
            lastVotedItem: null,
            isLoading: true,
            page: 1,
            showItem: true
        };
        this.handleVote = this.handleVote.bind(this);
        this.getRandomItem = this.getRandomItem.bind(this);
        this.nextRound = this.nextRound.bind(this);
    }

    handleVote = e => {
        const items = this.state.data;
        const currentItem = this.state.current;
        const votedItems = this.state.votedItems;

        if (e.target.value === "Nope") {
            currentItem.vote = "Nope";
        } else {
            currentItem.vote = "Dope";
        }
        votedItems.push(currentItem);

        this.setState({
            votedItems: votedItems,
            showItem: !this.state.showItem
        });

        if (items.length > 0) {
            this.setState({ lastVotedItem: votedItems[votedItems.length - 1] });
            this.getRandomItem();
        } else {
            this.setState({ gameOver: true });
        }
    };

    nextRound = () => {
        let pageNum = this.state.page;
        pageNum += 1;

        this.setState({
            gameOver: false,
            isLoading: true,
            page: pageNum
        });
        this.fetchData(pageNum);
    };

    getRandomItem = () => {
        //Get all items in original Arr
        const items = this.state.data;
        //console.log("Original Array", items);

        //Generate Random Number
        const rndNum = Math.floor(Math.random() * items.length);

        // Select Random item from original Arr
        const pickedItem = items[rndNum];

        // Remove Selected Item from Original Arr
        items.splice(rndNum, 1);
        //onsole.log("New Array", items);

        // Set Item as current Item
        this.setState({ current: pickedItem });
    };
    fetchData = pageNum => {
        const baseURL =
            "https://www.whatdropsnow.com/api/v2/products/?categories=5&page=";
        const page = pageNum;
        const URL = baseURL + page;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                //console.log(data);

                const items = data.data.map(el => {
                    return {
                        brand: el.attributes.brand_names[0],
                        name: el.attributes.name,
                        image: el.attributes.product_images[0].huge.url,
                        vote: null
                    };
                });
                this.setState({ data: items, isLoading: false });
                this.getRandomItem();
            })

            .catch(function(err) {
                console.log("Error", err);
            });
    };
    componentDidMount() {
        this.fetchData(1);
    }

    render() {
        const {
            votedItems,
            current,
            gameOver,
            showItem,
            isLoading
        } = this.state;

        const vh = window.innerHeight;

        return (
            <main
                style={{ height: vh + "px" }}
                className={gameOver ? "overview" : "single"}
            >
                <Header />

                <Card
                    current={current}
                    handleClick={this.handleVote}
                    gameOver={gameOver}
                    isLoading={isLoading}
                    showItem={showItem}
                />

                {/* {gameOver === false && <LastVotedItem item={lastVotedItem} />} */}

                <VotedList
                    gameOver={gameOver}
                    votedItems={votedItems}
                    nextRound={this.nextRound}
                />
            </main>
        );
    }
}

export default Game;
