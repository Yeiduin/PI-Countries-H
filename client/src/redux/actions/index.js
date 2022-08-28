export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRYDETAIL = "GET_COUNTRYDETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ORDER_ALPHANBETICAL = "ORDER_ALPHANBETICAL";

export const getAllCountries = () => {
  return async function (dispatch) {
    await fetch("http://localhost:3004/countries")
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: response });
      });
  };
};

export const getCountryDetail = (id) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3004/countries/${id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: GET_COUNTRYDETAIL, payload: response[0] });
      });
  };
};

export const filterByContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload };
};

export const orderAlphabetical = (payload) => {
  return { type: ORDER_ALPHANBETICAL, payload };
};
