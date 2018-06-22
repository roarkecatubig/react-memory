import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
// import Title from "./components/Title";
// import friends from "./friends.json";
import cardOptions from "./cards.json";
// import "./App.css";
import Match from "./components/Match/Match";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked: [],
    cardOptions,
    counter: 0,
    highScore: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  checkCard = cardID => {
    console.log(cardID);
    if (this.state.clicked.length === 0) {
        let newCount = this.state.counter + 1;
        let selected = this.state.cardOptions.filter(cardOption => cardOption.id === cardID)
        let newClicked = selected[0];
        let newArray = [];
        newArray.push(newClicked);
        console.log(newArray)
        this.setState({
            clicked: newArray,
            highScore: newCount,
            counter: newCount
        })

    }

    else {
        for (var i = 0; i < this.state.cardOptions.length; i++) {
            if (this.state.clicked[i].id === cardID) {
                console.log("Sorry you picked that one already")
                // return array[i];
            }
            else {
                let newCount = this.state.counter + 1;
                let selected = this.state.cardOptions.filter(cardOption => cardOption.id === cardID)
                let newClicked = selected[0];
                let newArray = [];
                newArray.push(newClicked);
                if (newCount > this.state.highScore) {
                    this.setState({
                        clicked: newArray,
                        highScore: newCount,
                        counter: newCount
                    })
                }
    
                else if (newCount <= this.state.highScore) {
                    this.setState({
                        clicked: newArray,
                        counter: newCount
                    })
                }
    
            }
        }
    }
    
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state)
    return (
      
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Score: {this.state.counter}</span>
                <span className="navbar-brand mb-0 h1">High Score: {this.state.highScore}</span>
            </nav>
            <div className="col">
                <div className="row">
                    <div className="jumbotron">
                        <h1>Yu-Gi-Oh!</h1>
                        <p>Click the different Yu-Gi-Oh cards but don't click the same one twice! Keep playing to reach the top score</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <Wrapper>
                {this.state.cardOptions.map(cardOption => (    
                    <Match key={cardOption.id}
                        id={cardOption.id}
                        name={cardOption.name}
                        image={cardOption.image}
                        checkCard={this.checkCard}
                    />
                ))}
                </Wrapper>
            </div>
        

      </div>
    );
  }
}

export default App;
