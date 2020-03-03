import React from 'react';
import 'normalize.css';
import Header from '../Header';
import Menu from '../Menu';
import Content from '../Content';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  componentDidMount() {
    const { startLoading } = this.props;
    startLoading();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex-wrap">
          <Menu />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
