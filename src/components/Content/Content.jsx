import React from 'react';
import PropTypes from 'prop-types';

import Cocktail from './Cocktail';
import PreLoad from '../Preload';
import './index.scss';


const Content = (props) => {
  const {
    data,
    filteredCat,
    finish,
  } = props;

  const resultFilteredCat = Object.keys(filteredCat).length && filteredCat;
  const resultFilters = resultFilteredCat || data;

  return (
    <div className="content-wrap">
      { finish ? (<PreLoad />) : (resultFilters.length && resultFilters.map((filter) => {
        const category = filter.strCategory;
        const photos = filter.items;

        return (!filteredCat || category) && (
          <div key={category} className="category">
            <h2 className="content__h2">{category}</h2>
            <div className="content">
              {
               photos && photos.map((photo) => (
                 <Cocktail key={photo.idDrink} title={photo.strDrink} image={photo.strDrinkThumb} />
               ))
              }
            </div>
          </div>
        );
      }))}
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.any.isRequired,
  filteredCat: PropTypes.any.isRequired,
  finish: PropTypes.bool.isRequired,
};

export default Content;
