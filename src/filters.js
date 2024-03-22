import { filterByParams } from "./helpers.js";
// The function filterData takes tow parameters, data : the data needs to be filterd , filtersKey : its optional represents the key or keys based on which the filtering will be performed .if not provided the function returns the original data without filtering 
const filterData = (data, filtersKey = undefined) => {
  if (!filtersKey) return data;
  const result = filterByParams(data, filtersKey);
  return result;
};

export default filterData;
