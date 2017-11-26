import React, {Component} from 'react';

import Phonicschemelist from '../components/phonicSchemeList';
import Cardsetlist from '../components/cardSetList';
import Flashcard from '../components/flashcard';

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
   * Creates an instance of Home.
   * @param {any} props
   * @memberof Home
   */
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      setChoice: null,
      schemeChoice: null,
      step: 1,
      cardSet: [],
      cardSetLength: null,
    };
    this.handleSchemeChoice = this.handleSchemeChoice.bind(this);
    this.handleSetChoice = this.handleSetChoice.bind(this);
    this.handleFlashcardClick = this.handleFlashcardClick.bind(this);
    this.returnClick = this.returnClick.bind(this);
  }
  /**
   * @return {ReactElement}
   * @memberof Home
   */
  render() {
    if (this.state.step === 1) {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <Phonicschemelist onClick={this.handleSchemeChoice} />
        </div>
      );
    } else if (this.state.step === 2) {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <Cardsetlist
            handleSetChoice={this.handleSetChoice}
            schemeChoice={this.state.schemeChoice}
          />
        </div>
      );
    } else if (this.state.step === 3) {
      return (
        <Flashcard
          returnClick={this.returnClick}
          handleClick={this.handleFlashcardClick}
          setChoice={this.state.setChoice}
          currentCard={this.state.currentCard}
        />
      );
    }
  }
  /**
   * Click handler
   * @param {event} e - the click event
   * return {void}
   * @memberof Home
   */
  handleSchemeChoice(e) {
    this.setState({schemeChoice: e.currentTarget.id, step: 2});
  }
  /**
   * @param {any} e
   * @memberof Home
   */
  handleSetChoice(e) {
    this.setState({setChoice: e.currentTarget.id, step: 3});
  }

  /**
   * @param {any} e
   * @param {any} length
   * @memberof Home
   */
  handleFlashcardClick(e, length) {
    if (this.state.currentCard < length - 1) {
      this.setState({currentCard: this.state.currentCard + 1});
    } else {
      this.setState({currentCard: 0});
    }
  }

  /**
   * @memberof Home
   */
  returnClick() {
    this.setState({step: 2, currentCard: 0});
  }
}

export default Home;
