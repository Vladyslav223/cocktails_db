import React from 'react';

import Cocktail from './Cocktail';
import './index.scss';


class Content extends React.Component {
  state={
  }

  render() {
    const { filters, filteredCat, data } = this.props;
    const resultFilteredCat = filteredCat.filteredCat.length && filteredCat.filteredCat;
    const resultFilters = resultFilteredCat || data;
    return (
      <div className="content-wrap">
        {resultFilters.length && resultFilters.map((filter) => {
          const category = filter.strCategory;
          const photos = filter.items;
          console.log('data', data);
          return (!filteredCat || category) && (
          <div key={category} className="category">
            <h2 className="content__h2">{category}</h2>
            <div className="content">
              {
               photos && photos.map((photo) => (<Cocktail key={photo.idDrink} title={photo.strDrink} image={photo.strDrinkThumb} />))
              }
            </div>
          </div>
          );
        })}
      </div>
    );
  }
}

export default Content;
