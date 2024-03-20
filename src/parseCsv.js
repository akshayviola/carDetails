import fs from "fs";
import path from "path";
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
        console.log(`${path.basename(filename)} has been parsed\n\n`);
        resolve(data);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export default parseCsv;
