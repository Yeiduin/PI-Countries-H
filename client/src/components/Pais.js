import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/paises.module.css";

const Pais = ({ name, bandera, continente, id }) => {
  return (
    <div>
      <Link to={`/countries/${id}`} className={style.paiseslink}>
        <h3>{name}</h3>
        <div>
          <img src={bandera} alt="imagen de bandera" width={200} height={120} />
        </div>
      </Link>
      <p>{continente}</p>
    </div>
  );
};

export default Pais;
