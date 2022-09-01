import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRYDETAIL = "GET_COUNTRYDETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_TOURISTIC = "FILTER_TOURISTIC";
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";

export const getAllCountries = () => {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3004/countries")
        .then((response) => response.json())
        .then((response) => {
          dispatch({ type: GET_ALL_COUNTRIES, payload: response });
        });
    } catch (error) {
      console.log(error);
    }
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

export const getNameCountry = (name) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3004/countries?name=${name}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0]);
        dispatch({ type: GET_NAME_COUNTRY, payload: response });
      });
  };
};

export const postTouristActivy = (datos) => {
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(
        `http://localhost:3004/activities`,

        datos
      );

      dispatch({ type: POST_ACTIVITY, payload: respuesta });

      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload };
};

export const filterByActivytourist = (dato) => {
  return { type: FILTER_TOURISTIC, payload: dato };
};
