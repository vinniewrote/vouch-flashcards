import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import flashCardPack from "./data/flashCardPack";
    
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flashCardPack,
      cardNumber: 0
    };
  }
  render(){
    const { flashCardPack } = this.state;

    const shuffle = function (flashCardPack) {
      let currentIndex = flashCardPack.length;
      let temporaryValue;
      let randomIndex;

	    while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex = currentIndex - 1;
		    temporaryValue = flashCardPack[currentIndex];
        flashCardPack[currentIndex] = flashCardPack[randomIndex];
        flashCardPack[randomIndex] = temporaryValue;
	    }
	    return flashCardPack;
    };

    const shuffledCards = shuffle(flashCardPack.slice());
    const showNextCard = () => {
     let cardShown = this.state.cardNumber
      if ((cardShown + 1) !== flashCardPack.length) {
        this.setState({cardNumber: cardShown += 1});
      }
    }

    const showPrevCard = () => {
      let cardShown = this.state.cardNumber
      if (cardShown !== 0) {
        this.setState({cardNumber: cardShown -= 1});
      }
    }

    const resetDeck = () => {
      this.setState({cardNumber: 0});
    }

    return (
      <div className="wrapper">
        <button className="btn nav-prev" onClick={showPrevCard}>Prev</button>
        <button className="btn nav-next" onClick={showNextCard}>Next</button>
        <button className="btn reset-deck" onClick={resetDeck}>Reset Deck</button>
        <div className="viewbox">
          {shuffledCards.map((card, index) => (
            <Card key={index} cardStack={shuffledCards[index]} cardNumber={index}/>
          ))}
        </div>
      </div>
    );
    }
}

export default App;
