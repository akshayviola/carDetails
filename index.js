import { filterData, findHighestExpensiveCars } from "./src/filters.js";
import parseCsv from "./src/parseCsv.js";
import { enterValues, promptForYesOrNo, promptForLeastExpensiveCar, promptForHighestExpensiveCar } from "./src/cmd.js";
import { findLeastExpensiveCar } from "./src/filters.js";
const main = async () => {
  const cars = await parseCsv("./data/cars.csv");

<<<<<<< HEAD
// parsing csv file
const parseCSV = (filename) => {
    const data = fs.readFileSync(filename, 'utf8');
    const [headers, ...rows] = data.trim().split('\n').map(row => row.split(','));
    return rows.map(values => Object.fromEntries(headers.map((header, index) => [header.trim(), values[index].trim()])));
};

// filter cars
const filterCars = (cars, filters) => cars.filter(car => Object.entries(filters).every(([key, value]) => car[key] === value));

// least expensive car
const findLeastExpensiveCar = (cars) => cars.reduce((min, car) => {
    const price = parseFloat(car['selling_price']);
    if (isNaN(price)) return min;
    return (!min || price < parseFloat(min['selling_price'])) ? car : min;
}, null);

// print details
const cars = parseCSV('cars.csv');
const filteredCars = filterCars(cars, { 'fuel': 'Petrol', 'selling_price': '92000' }); 
const leastExpensiveCar = findLeastExpensiveCar(cars);

console.log('Filtered Cars:', filteredCars);
console.log('Least Expensive Car:', leastExpensiveCar);
=======
  
  const filters = await enterValues();

  
// least
  const getLeastExpensiveCar = await promptForLeastExpensiveCar();
  if(getLeastExpensiveCar){
    const leastExpensiveCar = findLeastExpensiveCar(cars);
    console.log("Least Expensive Car:", leastExpensiveCar);
  }
  // highest
  const getHighestExpensiveCar = await promptForHighestExpensiveCar();
  if(getHighestExpensiveCar){
    const highestExpensiveCar = findHighestExpensiveCars(cars);
    console.log("Higest Expensive Cars:",highestExpensiveCar);
  }

 
  
  const isConformed = await promptForYesOrNo();
  if (isConformed) {
    const data = filterData(cars, filters);
    
    console.log("🚀 ~ main ~ data:", JSON.stringify(data, null, 2));
    
    process.exit(0);
    
  }

console.log(
    "🚀 ~user has cancelled the filter showing all data",
    JSON.stringify(cars, null, 2)
  );
  process.exit(0);

  
};


main();
>>>>>>> master
