import React, {Component} from 'react';

import Phonicschemelist from '../components/phonicSchemeList';

class Home extends Component {
  render() {
    return (
      <div>
        <Phonicschemelist onClick={this.onClick.bind(this)} />
      </div>
    );
  }

  onClick() {
    console.log(this);
  }
}
export default Home;
