import React from 'react';
import {connect} from 'react-redux'; 
import {resetGame, info, guess} from '../actions/actions';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { stat } from 'fs';

export class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  // restartGame() {
  // }

  // makeGuess(guess) {
  //   guess = parseInt(guess, 10);
  //   if (isNaN(guess)) {
  //     this.setState({ feedback: 'Please enter a valid number' });
  //     return;
  //   }

  //   const difference = Math.abs(guess - this.state.correctAnswer);

  //   let feedback;
  //   if (difference >= 50) {
  //     feedback = 'You\'re Ice Cold...';
  //   } else if (difference >= 30) {
  //     feedback = 'You\'re Cold...';
  //   } else if (difference >= 10) {
  //     feedback = 'You\'re Warm.';
  //   } else if (difference >= 1) {
  //     feedback = 'You\'re Hot!';
  //   } else {
  //     feedback = 'You got it!';
  //   }

  //   this.setState({
  //     feedback,
  //     guesses: [...this.state.guesses, guess]
  //   });

  //   // We typically wouldn't touch the DOM directly like this in React
  //   // but this is the best way to update the title of the page,
  //   // which is good for giving screen-reader users
  //   // instant information about the app.
  //   document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  // }

  // generateAuralUpdate() {
  //   const { guesses, feedback } = this.state;

  //   // If there's not exactly 1 guess, we want to
  //   // pluralize the nouns in this aural update.
  //   const pluralize = guesses.length !== 1;

  //   let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  //   if (guesses.length > 0) {
  //     auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  //   }


  //   this.setState({ auralStatus });
  // }

  render() {
    const guessCount = this.props.guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.props.dispatch(resetGame())}
          onGenerateAuralUpdate={() => this.props.dispatch(info())}
        />
        <main role="main">
          <GuessSection
            feedback={this.props.feedback}
            guessCount={guessCount}
            onMakeGuess={curGuess => this.props.dispatch(guess(curGuess))}
          />
          <StatusSection guesses={this.props.guesses} 
            auralStatus={this.props.auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  feedback : state.feedback, 
  guesses : state.guesses, 
  auralStatus : state.info
}); 

export default connect(mapStateToProps)(Game); 
