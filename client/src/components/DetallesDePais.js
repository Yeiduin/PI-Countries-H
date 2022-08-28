import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";

const DetallesDePais = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryDetail(match.params.id));
    console.log(match.params);
  }, []);
  const detalle = useSelector((state) => state.countryDetail);

  return (
    <div>
      <h2>{detalle.name}</h2>
      <div>
        <img
          src={detalle.bandera}
          alt="bandera imagen"
          width={300}
          height={185}
        ></img>
      </div>
      <div>
        <h3>Datos del pais</h3>
        <h5>Capital: {detalle.capital}</h5>
        <h5>Continente: {detalle.continente}</h5>
        <h5>Subregion: {detalle.subregion}</h5>
        <h5>Poblacion: {detalle.poblacion}</h5>
        <h5>Area: {detalle.poblacion}</h5>
        <h5>Codigo de pais: {detalle.id}</h5>
      </div>
    </div>
  );
};

export default DetallesDePais;
