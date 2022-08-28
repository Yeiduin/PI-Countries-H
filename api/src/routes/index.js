const { Router } = require("express");
const axios = require("axios");
const {
  getAllCountries,
  saveDataCountries,
} = require("./controllers/funciones");
const { notilde } = require("./controllers/funextra.js");
const { Country, Activityturist } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", async (req, res) => {
  await getAllCountries();
  const { name } = req.query;
  const paices = await Country.findAll();
  if (name) {
    let pais = await paices.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    pais ? res.json(pais) : res.json("no se encontro");
  } else {
    res.json(paices);
  }
});

router.get("/countries/:id", async (req, res) => {
  await getAllCountries();
  const { id } = req.params;
  const paices = await Country.findAll();
  const pais = await paices.filter((el) =>
    el.id.toLowerCase().includes(id.toLowerCase())
  );
  pais ? res.json(pais) : res.send("no se encontro");
});

router.post("/activities", async (req, res) => {
  const { name, dificult, duration, season } = req.body;
  const newactivity = await Activityturist.create({
    name,
    dificult,
    duration,
    season,
  });
  res.json(newactivity);
});

module.exports = router;
