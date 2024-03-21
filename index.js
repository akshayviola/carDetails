import { filterData, findHighestExpensiveCars } from "./src/filters.js";
import parseCsv from "./src/parseCsv.js";
import { enterValues, promptForYesOrNo, promptForLeastExpensiveCar, promptForHighestExpensiveCar } from "./src/cmd.js";
import { findLeastExpensiveCar } from "./src/filters.js";
const main = async () => {
  const cars = await parseCsv("./data/cars.csv");

  
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
