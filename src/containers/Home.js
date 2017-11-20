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
    this.state = {setChoice: null, schemeChoice: null, step: 1, cardSet: []};
    this.handleSchemeChoice = this.handleSchemeChoice.bind(this);
    this.handleSetChoice = this.handleSetChoice.bind(this);
  }
  /**
 * @return {ReactElement}
 * @memberof Home
 */
  render() {
    console.log('render called');
    if (this.state.step === 1) {
      return (
        <div>
          <Phonicschemelist onClick={this.handleSchemeChoice} />
        </div>
      );
    } else if (this.state.step === 2) {
      return (
        <Cardsetlist
          handleSetChoice={this.handleSetChoice}
          schemeChoice={this.state.schemeChoice}
        />
      );
    } else if (this.state.step === 3) {
      return <Flashcard setChoice={this.state.setChoice} />;
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
}

export default Home;
