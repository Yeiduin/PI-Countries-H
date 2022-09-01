/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  filterByActivytourist,
  filterByContinent,
  getAllCountries,
} from "../redux/actions";
import style from "../styles/paises.module.css";
import Buscador from "./Buscador";
import { Actividades, alfabetoc, filtromas, filtromenos } from "./funciones";
import Paginado from "./Paginado";
import Pais from "./Pais";

const Paises = () => {
  const dispatch = useDispatch();
  var pais = useSelector((state) => state.countries);
  const pais2 = useSelector((state) => state.filtrado);
  const [alfa, setAlfa] = useState("ninguno");
  const [filt, setFilt] = useState("Todos");
  const [activar, setActivar] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [paisesPorPag, setPaisesPorPag] = useState(10);

  const ultimoPaisDeLaPag = paginaActual * paisesPorPag;
  const primerPaisDeLaPag = ultimoPaisDeLaPag - paisesPorPag;
  const paisesPagActual = pais.slice(primerPaisDeLaPag, ultimoPaisDeLaPag);
  const pru = Actividades(pais2);

  const paginado = (numero) => {
    setPaginaActual(numero);
  };

  useEffect(() => {
    dispatch(getAllCountries());

    setActivar(!activar);
    console.log(pais);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtroContinente = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    setPaginaActual(1);
  };

  function filtrar(filt) {
    if (filt === "menos") {
      const f = pais.sort(filtromenos);
      pais = f;
    }

    if (filt === "mas") {
      const w = pais.sort(filtromas);
      pais = w;
    }

    dispatch(filterByContinent("Todos"));
    setActivar(!activar);
  }
  const activadoor = (e) => {
    dispatch(filterByContinent("Todos"));
    if (!activar) {
      return console.log("no hice nada");
    } else {
      setActivar(!activar);
    }
  };
  const activadoor2 = (e) => {
    let ver = document.getElementById("48").value;
    dispatch(filterByContinent(ver));
    setActivar(!activar);
  };

  const fitroturistico = (e) => {
    e.preventDefault();
    dispatch(filterByActivytourist(e.target.value));
    setPaginaActual(1);
  };

  return (
    <div className={style.general}>
      {pais2[0] ? (
        <div>
          <div className={style.titulo}>
            <h1>Paises del Mundo</h1>
            <Buscador></Buscador>

            <div className={style.losfiltros}>
              <p className={style.parafofiltro}>Alfabetico</p>
              <select
                disabled={activar}
                onChange={(e) => {
                  alfabetoc(e.target.value, pais);
                  activadoor2(e);
                }}
              >
                <option value="ninguno">Filtrado: {alfa}</option>
                <option value="asc">orden de A - Z</option>
                <option value="desc">orden de Z - A</option>
              </select>
              <p className={style.parafofiltro}>Poblacion</p>
              <select
                disabled={activar}
                onChange={(e) => {
                  filtrar(e.target.value);
                }}
              >
                <option value="sin">sin filtro</option>
                <option value="menos">menos</option>
                <option value="mas">mas</option>
              </select>
              <p className={style.parafofiltro}>Actividad turistica</p>
              <select
                onChange={(e) => {
                  fitroturistico(e);
                }}
              >
                <option value="filtro">filtro</option>
                {pru.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>

              <button onClick={activadoor}>reset filtro</button>

              <div>
                <p className={style.parafofiltro}>Continente</p>
                <select
                  id="48"
                  onChange={(e) => {
                    setFilt(e.target.value);
                    filtroContinente(e);
                  }}
                >
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
          <div className={style.paginadoo}>
            <Paginado
              paisesPorPag={paisesPorPag}
              pais={pais.length}
              paginado={paginado}
              paginaActual={paginaActual}
            ></Paginado>
          </div>
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
      ) : (
        <div>
          <h2>cargando la informacion del servidor...</h2>
          <img
            src="https://i.gifer.com/origin/80/809f5c2aab51871f3544d24b9b88ce23_w200.gif"
            alt="imagen"
          />
        </div>
      )}
    </div>
  );
};

export default Paises;
