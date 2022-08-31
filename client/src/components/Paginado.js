import React from "react";
import style from "../styles/paginado.module.css";

const Paginado = ({ paisesPorPag, pais, paginado, paginaActual }) => {
  const numeroDePag = [];
  for (let i = 0; i < Math.ceil(pais / paisesPorPag); i++) {
    numeroDePag.push(i + 1);
  }

  const anterior = () => {
    if (paginaActual > 1) {
      paginado(paginaActual - 1);
    } else paginado(1);
  };
  const siguiente = () => {
    if (paginaActual < numeroDePag.length) {
      paginado(paginaActual + 1);
    } else paginado(numeroDePag.length);
  };

  return (
    <div className={style.paginado}>
      <nav className={style.nave}>
        <ul className={style.list}>
          {numeroDePag &&
            numeroDePag.map((number) => (
              <li key={number}>
                <button onClick={(e) => paginado(number)}>{number}</button>
              </li>
            ))}
        </ul>
        <div className={style.boton}>
          <button onClick={anterior}>anterior</button>
          <p>pagina</p> <p>{paginaActual}</p>
          <button onClick={siguiente}>siguiente</button>
        </div>
      </nav>
    </div>
  );
};

export default Paginado;
