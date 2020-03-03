import React from 'react';

import Cocktail from './Cocktail';
import PreLoad from '../Preload';
import './index.scss';


class Content extends React.Component {
  state={
  }

  render() {
    const {
      filters,
      filteredCat,
      finish,
    } = this.props;

    const resultFilteredCat = Object.keys(filteredCat).length && filteredCat;
    const resultFilters = resultFilteredCat || filters;

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
  }
}

export default Content;