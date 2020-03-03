import axios from 'axios';

export function fetchFilters() {
  const API_FILTERS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  return axios.get(API_FILTERS).then((res) => res.data.drinks);
}

export function fetchCategories(filters) {
  const urlMockup = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const promises = filters.map((element) => {
    const myUrl = urlMockup + element.strCategory;
    return axios.get(myUrl);
  });

  return axios.all(promises).then((results) => filters.map((filter, index) => {
    // eslint-disable-next-line no-param-reassign
    filter.items = results[index].data.drinks;
    return filter;
  }));
}
