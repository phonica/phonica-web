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
 * return {void}
 * @memberof Home
 */
  onClick(e) {
    console.log('I am in Home', e.target);
  }
}
export default Home;
