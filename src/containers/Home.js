import React, {Component} from 'react';

import Phonicschemelist from '../components/phonicSchemeList';
import Cardsetlist from '../components/cardSetList';

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
    this.state = {schemeChoice: null, step: 1, cardSet: []};
    this.handleSchemeChoice = this.handleSchemeChoice.bind(this);
  }
  /**
 * @return {ReactElement}
 * @memberof Home
 */
  render() {
    if (this.state.step === 1) {
      return (
        <div>
          <Phonicschemelist onClick={this.handleSchemeChoice} />
        </div>
      );
    } else if (this.state.step === 2) {
      return <Cardsetlist schemeChoice={this.state.schemeChoice} />;
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
}
export default Home;
