import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Filtro = ({ pais, argumento }) => {
  function filtrar() {
    const f = pais.sort(function (a, b) {
      let c = Number(a.poblacion.replace(/[.]/g, ""));
      let d = Number(b.poblacion.replace(/[.]/g, ""));

      if (c === d) {
        return 0;
      }
      if (c < d) {
        return -1;
      }
      return 1;
    });
    pais = f;
  }

  return <div></div>;
};

export default Filtro;
