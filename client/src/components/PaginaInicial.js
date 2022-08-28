import React from "react";
import style from "../styles/style.module.css";
import { Link } from "react-router-dom";

const PaginaInicial = () => {
  return (
    <div className={style.fondo}>
      <Link to={"/Home"} className={style.titulo}>
        <div className={style.bordedetitulo}>
          <h1 className={style.tituloh1}>Países</h1>
        </div>
      </Link>
    </div>
  );
};

export default PaginaInicial;
