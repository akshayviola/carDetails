import fs from "fs";
import csv from "csv-parser";

const parseCsv = (filename) => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        console.log(`${filename} has been parsed`);
        resolve(data);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export default parseCsv;
