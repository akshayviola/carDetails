import filterData from "./src/filters.js";
import parseCsv from "./src/parseCsv.js";
import { enterValues, promptForYesOrNo } from "./src/cmd.js";

const main = async () => {
  const cars = await parseCsv("./data/cars.csv");
  const filters = await enterValues();

  const isConformed = await promptForYesOrNo();
  if (isConformed) {
    const data = filterData(cars, filters);
    console.log("🚀 ~ main ~ data:", JSON.stringify(data, null, 2));
    process.exit(0);
  }
  console.log("🚀 ~user has cancelled the filter showing all data", cars);
  process.exit(0);
};

main();
