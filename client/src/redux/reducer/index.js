import { fitraActividad } from "../../components/funciones.js";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRYDETAIL,
  FILTER_BY_CONTINENT,
  FILTER_TOURISTIC,
  GET_NAME_COUNTRY,
  POST_ACTIVITY,
} from "../actions/index.js";

const initialState = {
  countries: [],
  filtrado: [],
  ordenamiento: [],
  countryDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        ordenamiento: [...action.payload],
        countries: [...action.payload],
        filtrado: [...action.payload],
      };
    case GET_NAME_COUNTRY:
      return { ...state, countries: action.payload };
    case GET_COUNTRYDETAIL:
      return { ...state, countryDetail: action.payload };

    case POST_ACTIVITY:
      return { ...state };

    case FILTER_BY_CONTINENT:
      const paises = state.filtrado;
      const filtro =
        action.payload === "Todos"
          ? paises
          : paises.filter((p) => p.continente === action.payload);
      return { ...state, countries: filtro, ordenamiento: filtro };

    case FILTER_TOURISTIC:
      const pais = state.ordenamiento;
      const dato = action.payload;

      const filact = fitraActividad(dato, pais);

      return { ...state, countries: filact };

    default:
      return state;
  }
};

export default rootReducer;
