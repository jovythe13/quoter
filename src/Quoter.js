import React from 'react';
import FunnyQuotes from './FunnyQuotes.json'; // Thanks To: https://gist.github.com/shakked/f56894535c7292c4d6c6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
// import ReactDOM from 'react-dom/client';

class Quoter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: this.random()
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){            
    this.setState({
      index: this.random()
    });
  }
  render() {
    let currentQuote = FunnyQuotes[this.state.index];
    
    return (
      <div id="quote-box">        
        <h1 id="text">{currentQuote.quote}</h1>
        <h2 id="author">{currentQuote.author}</h2>
        <button id="new-quote" onClick={this.handleClick}>Hahaha ! Ok, Next Please...</button>
        <a id="tweet-quote" href={this.tweet(currentQuote)} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareTwitter} /></a>
        
        <footer>React + CSS Grid practice by <em>Balentong</em> </footer>
      </div>
    )
  }

  random(){
    return parseInt(Math.random() * FunnyQuotes.length);
  }
  tweet(quote){    
    return 'https://twitter.com/intent/tweet?hashtags=funnyquotes&related=freecodecamp&text=' +
      quote.quote + '  ' + quote.author;
  }
}

export default Quoter;