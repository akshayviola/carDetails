const fs = require('fs');

// csv file parsing
function parseCSV(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');
    const cars = rows.map(row => {
        const values = row.split(',');
        const car = {};
        headers.forEach((header, index) => {
            car[header.trim()] = values[index].trim();
        });
        return car;
    });
    return cars;
}

// filter cars
function filterCars(cars, filters) {
    return cars.filter(car => {
        for (const key in filters) {
            if (car[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    });
}

// print
const cars = parseCSV('cars.csv');
const filteredCars = filterCars(cars, { 'fuel': 'Petrol', 'selling_price': '92000' }); // Example filter

console.log('Filtered Cars:', filteredCars);

