// THis code provides command line interface for users to input data interactively., primarily used for filtering data based on certian criteria 

// interface for reading data from a readable stream one line at a time
import readline from "readline";

// method used to create an instance of the readline interface 
// it takes an object as an argument with input  and output properties in this case standard input and standard output
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout,
});
// Returns a Promise that resolves with the user's input after asking the user to enter a value fro the specified key 
const promptForValue = (key) =>
  new Promise((resolve) =>
    rl.question(`Enter value of ${key} to filter: `, (answer) =>
      resolve(answer.trim() || undefined)
    )
  );
// prompts user to enter values specified in the structure object , the input values are stored in the the result object and returned once all values are enterd 
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
// It returns a promise that resolves to true if the user enters "yes" or "y" and resolve to false if user enterd "no" or "n"
// calls an error if the user provide any other input 
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
