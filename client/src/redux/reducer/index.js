import {
  GET_ALL_COUNTRIES,
  GET_COUNTRYDETAIL,
  FILTER_BY_CONTINENT,
  ORDER_ALPHANBETICAL,
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
    case GET_COUNTRYDETAIL:
      return { ...state, countryDetail: action.payload };

    case FILTER_BY_CONTINENT:
      const paises = state.filtrado;
      const filtro =
        action.payload === "Todos"
          ? paises
          : paises.filter((p) => p.continente === action.payload);
      return { ...state, countries: filtro, ordenamiento: filtro };

    case ORDER_ALPHANBETICAL:
      const paises2 = state.ordenamiento;
      const orden = function (a) {
        if (a === "asc") {
          const ascen = paises2.sort(function (a, b) {
            if (a === b) {
              return 0;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 1;
          });

          return ascen;
        }
        if (action.payload === "desc") {
          const desc = paises2.sort(function (a, b) {
            if (a === b) {
              return 0;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 1;
          });

          return desc;
        }
      };
      const orden2 = orden(action.payload);

      return { ...state, countries: orden2 };

    default:
      return state;
  }
};

export default rootReducer;
