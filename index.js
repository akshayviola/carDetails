import { filterData, findHighestExpensiveCars } from "./src/filters.js";
import parseCsv from "./src/parseCsv.js";
import { enterValues, promptForYesOrNo, promptForLeastExpensiveCar, promptForHighestExpensiveCar } from "./src/cmd.js";
import { findLeastExpensiveCar } from "./src/filters.js";

const main = async () => {
  
  const cars = await parseCsv("./data/cars.csv");
  const filters = await enterValues();

  const isConformed = await promptForYesOrNo();
  if (isConformed) {
    const data = filterData(cars, filters);
    console.log("🚀 ~ main ~ data:", JSON.stringify(data, null, 2));
  } else {
    console.log(
      "🚀 ~ User has cancelled the filter showing all data",
      JSON.stringify(cars, null, 2)
    );
  }

  // Prompt for the least expensive car
  const getLeastExpensiveCar = await promptForLeastExpensiveCar();
  if (getLeastExpensiveCar) {
    const leastExpensiveCar = findLeastExpensiveCar(cars);
    console.log("Least Expensive Car:", leastExpensiveCar);
  }

  // Prompt for the highest expensive car
  const getHighestExpensiveCar = await promptForHighestExpensiveCar();
  if (getHighestExpensiveCar) {
    const highestExpensiveCar = findHighestExpensiveCars(cars);
    console.log("Highest Expensive Cars:", highestExpensiveCar);
  }

  process.exit(0);
};

main();
