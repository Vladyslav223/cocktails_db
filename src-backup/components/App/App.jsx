import React from 'react';
import 'normalize.css';
import logo from '../../images/logo.png';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {

  componentDidMount() {
  const { startLoading } = this.props;
  startLoading();
  }

  render() {
    const { categories, startLoading } = this.props;

    console.log('this. props', categories);

    return (
      <div className="App">
        <div className="flex-wrap">
          {/* {categories && categories.map((cat) => (
            ))} */}
        </div>
        <img src={logo} alt="logo" />

      </div>
    );
  }
}

export default App;
