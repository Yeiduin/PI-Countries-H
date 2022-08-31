const { Router } = require("express");
const axios = require("axios");
const {
  getAllCountries,
  saveDataCountries,
  nueva,
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
  try {
    const { name } = req.query;
    const paices = await Country.findAll({
      include: {
        model: Activityturist,
        attributes: ["name", "dificult", "duration", "season"],
        through: { attributes: [] },
      },
    });
    if (name) {
      let pais = await paices.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pais ? res.json(pais) : res.json("no se encontro");
    } else {
      res.json(paices);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/countries/:id", async (req, res) => {
  await getAllCountries();
  const { id } = req.params;
  const paices = await Country.findAll({
    include: {
      model: Activityturist,
      attributes: ["name", "dificult", "duration", "season"],
      through: { attributes: [] },
    },
  });
  const pais = await paices.filter((el) =>
    el.id.toLowerCase().includes(id.toLowerCase())
  );
  pais ? res.json(pais) : res.send("no se encontro");
});

router.post("/activities", async (req, res) => {
  try {
    const { name, dificult, duration, season, pais } = req.body;
    console.log(req.body.name);

    await nueva(name, dificult, duration, season, pais);

    res.json(name);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

module.exports = router;
