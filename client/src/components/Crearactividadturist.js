import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/crearactiv.module.css";
import { Link } from "react-router-dom";
import { getAllCountries, postTouristActivy } from "../redux/actions";
import { organizar } from "./funciones";

const Crearactividadturist = () => {
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.countries);
  const [save, setSave] = useState(1);
  const paisesParaSelec = organizar(paises);
  const temporadas = ["Verano", "Otoño", "Invierno", "Primavera"];
  const [input, setInput] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "Verano",
    pais: [],
  });
  useEffect(() => {
    dispatch(getAllCountries());
    console.log("se ejecuto");
    console.log(input);
  }, [save]);

  function tomarValores(e) {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function tomarSelec(e) {
    e.preventDefault();
    /*  if (e.target.value === "Afganistán" || "Verano") {
      if ([e.target.name] === "pais") {
        setInput({
          ...input,
          [e.target.name]: [...input.pais, "Afganistán"],
        });
        return console.log(input);
      }
      */
    setInput({ ...input, [e.target.name]: [...input.pais, e.target.value] });
  }
  function defecto() {
    // eslint-disable-next-line eqeqeq
    if (input.pais == false) {
      setInput((input.pais = ["Afganistán"]));
      console.log(input);
    }
  }

  function postear(e) {
    defecto();
    e.preventDefault();

    dispatch(postTouristActivy(input));
    dispatch(getAllCountries());
  }
  function limpiar() {
    let form = document.getElementById("45");
    form.reset();
    setInput({
      name: "",
      dificult: "",
      duration: "",
      season: "Verano",
      pais: [],
    });
  }

  return (
    <div className={style.divgeneral}>
      <Link to="/Home">
        <button>Volver</button>
      </Link>
      <h1>Crear una actividad turistica</h1>
      <div>
        <form
          id="45"
          onSubmit={(e) => {
            postear(e);
            limpiar();
          }}
        >
          <label>
            <p>Nombre</p>
          </label>
          <input
            className={style.inputtext}
            type="text"
            required
            value={input.name}
            name="name"
            onChange={tomarValores}
          />
          <label>
            <p>Dificultad</p>
          </label>
          <input
            type="number"
            className={style.inputnum}
            required={true}
            min={1}
            max={5}
            value={input.dificult}
            name="dificult"
            onChange={tomarValores}
          />
          <label>
            <p>Duracion</p>
          </label>
          <input
            className={style.inputnum}
            type="number"
            required
            min={1}
            max={365}
            value={input.duration}
            name="duration"
            onChange={tomarValores}
          />
          <label>
            <p>Temporada</p>
          </label>
          <select name="season" onChange={tomarValores}>
            {temporadas.map((e, o) => (
              <option key={o} value={e}>
                {e}
              </option>
            ))}
          </select>
          <label>
            <p>Paises</p>
          </label>
          <select name="pais" required onChange={tomarSelec}>
            {paisesParaSelec.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <label>
            <p>gracias</p>
            <button type="submit" onClick={(e) => setSave(save + 1)}>
              enviar
            </button>
            <button onClick={limpiar}>limpiar formulario</button>
          </label>
          <ul>
            {input.pais.map((el, i) => (
              <li key={i}>{el + " - "}</li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Crearactividadturist;
