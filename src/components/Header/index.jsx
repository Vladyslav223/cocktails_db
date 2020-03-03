import React from 'react';

import './index.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">Cocktails DB</h1>
      <img src="cocktails_db/logo.png" className="header__logo" alt="logo" />
    </header>
  );
}

export default Header;
