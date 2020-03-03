import React, { useEffect } from 'react';
import 'normalize.css';
import Header from '../Header/index';
import Menu from '../Menu';
import Content from '../Content';

import './App.scss';

const App = (props) => {
  useEffect(() => {
    props.startLoading();
  });

  return (
    <div className="App">
      <Header />
      <div className="flex-wrap">
        <Menu />
        <Content />
      </div>
    </div>
  );
};

export default App;
