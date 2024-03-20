const fs = require('fs');

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
