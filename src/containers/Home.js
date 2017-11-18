import React, {Component} from 'react';

import Phonicschemelist from '../components/phonicSchemeList';

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
 * @return {ReactElement}
 * @memberof Home
 */
  render() {
    return (
      <div>
        <Phonicschemelist onClick={this.onClick} />
      </div>
    );
  }
  /**
 * Click handler
 * @param {event} e - the click event
 * return {void}
 * @memberof Home
 */
  onClick(e) {
    console.log('Event target', e.currentTarget.id);
  }
}
export default Home;
