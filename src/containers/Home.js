import React, {Component} from 'react';

import Phonicschemelist from '../components/phonicSchemeList';
import Cardsets from '../components/cardSets';

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
    this.onClick = this.onClick.bind(this);
  }
  /**
 * @return {ReactElement}
 * @memberof Home
 */
  render() {
    if (this.state.step === 1) {
      return (
        <div>
          <Phonicschemelist onClick={this.onClick} />
        </div>
      );
    } else if (this.state.step === 2) {
      return <Cardsets />;
    }
  }
  /**
 * Click handler
 * @param {event} e - the click event
 * return {void}
 * @memberof Home
 */
  onClick(e) {
    this.setState({schemeChoice: e.currentTarget.id, step: 2});
    console.log('Event target', e.currentTarget.id);
  }
}
export default Home;
