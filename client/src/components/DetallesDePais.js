import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/detalle.module.css";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../redux/actions";

const DetallesDePais = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryDetail(match.params.id));
    console.log(match.params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const detalle = useSelector((state) => state.countryDetail);

  function validar(detalle) {
    const defa = 0;
    if (detalle.activityturists) {
      if (detalle.activityturists[0]) {
        let respuesta = detalle.activityturists;
        return respuesta;
      }
    }
    return defa;
  }
  const prueba = validar(detalle);
  console.log(detalle.activityturists, detalle, validar(detalle));

  return (
    <div className={style.divgeneral}>
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
        <h5>Area: {detalle.poblacion} km²</h5>
        <h5>Codigo de pais: {detalle.id}</h5>

        <h4>Actividades turisticas</h4>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dificultad</th>
              <th>Duracion</th>
              <th>Temporada:</th>
            </tr>
          </thead>
          <tbody>
            {prueba !== 0 ? (
              prueba.map((el, i) => (
                <tr key={i}>
                  <td> {el.name}</td>
                  <td> {el.dificult}</td>
                  <td> {el.duration} dias</td>
                  <td>{el.season}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>aun no tiene </td>
                <td> -</td>
                <td>- </td>
                <td>-</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link to="/Home">
        <button>Regresar</button>
      </Link>
    </div>
  );
};

export default DetallesDePais;
