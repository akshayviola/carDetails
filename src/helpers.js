export const filterByParams = (data, params) =>
  data.filter(
    (e) =>
      (!params.name ||
        e.name.toLowerCase().includes(params.name.toLowerCase())) &&
      (!params.fuelType ||
        e.fuel.toLowerCase() === params.fuelType.toLowerCase()) &&
      e.selling_price >= (params.priceFrom || 0) &&
      e.selling_price <= (params.priceTo || Infinity) &&
      (!params.year || e.year === params.year)
  );
