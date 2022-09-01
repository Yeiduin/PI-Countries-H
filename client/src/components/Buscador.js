import React, { useState } from "react";
import style from "../styles/paises.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCountries, getNameCountry } from "../redux/actions";

const Buscador = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function RecibirName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function Buscar(e) {
    e.preventDefault();
    dispatch(getNameCountry(name));
  }

  function volver(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }
  return (
    <div className={style.buscaador}>
      <input
        type="text"
        placeholder="Buscar pais"
        onChange={RecibirName}
      ></input>
      <button type="submit" onClick={Buscar}>
        Buscar
      </button>
      <button onClick={volver}>volver</button>
      <Link to="/crearActividad">
        <button>crearActividad</button>
      </Link>
    </div>
  );
};

export default Buscador;
