import { filterByParams } from "./helpers.js";

const filterData = (data, filtersKey = undefined) => {
  if (!filtersKey) return data;
  const result = filterByParams(data, filtersKey);
  return result;
};

export default filterData;
