import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptForValue = (key) =>
  new Promise((resolve) =>
    rl.question(`Enter value of ${key} to filter: `, (answer) =>
      resolve(answer.trim() || undefined)
    )
  );

export const enterValues = async () => {
  const structure = {
    name: "string",
    priceFrom: "number",
    priceTo: "number",
    fuelType: "string",
    year: "number",
  };
  const result = {};
  for (const key in structure) {
    if (Object.prototype.hasOwnProperty.call(structure, key)) {
      result[key] = await promptForValue(key);
    }
  }
  return result;
};

export const promptForYesOrNo = () =>
  new Promise((resolve) => {
    rl.question("Get Filtered Date yes or no: ", (answer) => {
      const normalizedAnswer = answer.trim().toLowerCase();
      if (normalizedAnswer === "yes" || normalizedAnswer === "y") {
        resolve(true);
      } else if (normalizedAnswer === "no" || normalizedAnswer === "n") {
        resolve(false);
      } else {
        console.log("Invalid input. Please enter yes or no.");
        promptForYesOrNo().then(resolve);
      }
    });
  });
