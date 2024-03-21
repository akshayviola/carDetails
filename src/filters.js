import { filterByParams } from "./helpers.js";
import parseCsv from '../src/parseCsv.js';


 export const filterData = (data, filtersKey = undefined) => {
  if (!filtersKey) return data;
  const result = filterByParams(data, filtersKey);
  return result;
};

// // least expensive car
//  export const findLeastExpensiveCar = (cars) => cars.reduce((min, car) => {
//   const price = parseFloat(car['selling_price']);
//   if (isNaN(price)) return min;
//   return (!min || price < parseFloat(min['selling_price'])) ? car : min;
// }, null);

// functino for finding least expensive car
export const findLeastExpensiveCar = (cars) => cars
  .filter(car => !isNaN(parseFloat(car['selling_price'])))
  .sort((a, b) => parseFloat(a['selling_price']) - parseFloat(b['selling_price']))
  .slice(0, 5);


// function to find the most expensive cars
export const findHighestExpensiveCars = (cars) => cars
  .filter(car => !isNaN(parseFloat(car['selling_price'])))
  .sort((a, b) => parseFloat(b['selling_price']) - parseFloat(a['selling_price']))
  .slice(0, 5);





const cars =  parseCsv("./data/cars.csv");




