import React from 'react';

import './index.scss';

function Cocktail(props) {
  const { title, image } = props;
  return (
    <div className="cocktail">
      <img className="cocktail__img" src={image} alt="cocktail" />
      <span className="cocktail__title">{title}</span>
    </div>
  );
}

export default Cocktail;
