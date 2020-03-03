import axios from 'axios';

function fetchPhotos() {
  const resultsObject = {};
  const promises = [];
  const urlMockup = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const filters = [{ Ordinary_Drink: true }, { Ordinary_Drink: true }, { Cocoa: true }];
  filters.forEach((element) => {
    const category = Object.keys(element);
    const myUrl = urlMockup + category;

    promises.push(axios.get(myUrl));
    axios.all(promises).then((results) => {
      results.forEach((response) => {
        resultsObject[category] = response.data.drinks;
      });
    });
  });


  return resultsObject;
}


export default fetchPhotos;
