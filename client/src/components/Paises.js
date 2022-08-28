import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getAllCountries,
  orderAlphabetical,
} from "../redux/actions";
import style from "../styles/paises.module.css";
import Buscador from "./Buscador";
import Paginado from "./Paginado";
import Pais from "./Pais";

const Paises = () => {
  const dispatch = useDispatch();
  const pais = useSelector((state) => state.countries);
  const [alfa, setAlfa] = useState("i");
  const [paginaActual, setPaginaActual] = useState(1);
  const [paisesPorPag, setPaisesPorPag] = useState(10);
  const [orden, setOrden] = useState("");
  const ultimoPaisDeLaPag = paginaActual * paisesPorPag;
  const primerPaisDeLaPag = ultimoPaisDeLaPag - paisesPorPag;
  const paisesPagActual = pais.slice(primerPaisDeLaPag, ultimoPaisDeLaPag);

  const paginado = (numero) => {
    setPaginaActual(numero);
  };

  useEffect(() => {
    dispatch(getAllCountries());
    console.log("cambio en el estado del componente");
    console.log("mostrando refencia a elemento del DOM");
  }, []);

  const filtroContinente = (e) => {
    dispatch(filterByContinent(e.target.value));
    dispatch(orderAlphabetical(alfa));
    setPaginaActual(1);
  };
  const ordenAlfabetico = (e) => {
    e.preventDefault();
    dispatch(orderAlphabetical(e.target.value));
    setPaginaActual(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  return (
    <div>
      <div className={style.titulo}>
        <h1>paises del mundo</h1>
        <Buscador></Buscador>

        <div>
          <select
            onChange={(e) => {
              setAlfa(e.target.value);
              ordenAlfabetico(e);
            }}
          >
            <option value="sinfilt">ninguno</option>
            <option value="asc">orden de A - Z</option>
            <option value="desc">orden de Z - A</option>
          </select>
          <div>
            <select onChange={filtroContinente}>
              <option value="Todos">Todos</option>
              <option value="Americas">América</option>
              <option value="Africa">África</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceanía</option>
              <option value="Europe">Europa</option>
              <option value="Antarctic">Antártida</option>
            </select>
          </div>
        </div>
      </div>
      <Paginado
        paisesPorPag={paisesPorPag}
        pais={pais.length}
        paginado={paginado}
        paginaActual={paginaActual}
      ></Paginado>
      <div className={style.paises}>
        {paisesPagActual?.map((p, i) => (
          <Pais
            key={i}
            name={p.name}
            bandera={p.bandera}
            continente={p.continente}
            id={p.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Paises;
