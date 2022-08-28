const axios = require("axios");
const { notilde } = require("./funextra");
const { Country } = require("../../db.js");

module.exports = {
  capital: async () => {
    let apiUrl = await axios.get("https://restcountries.com/v3/all");
    const apiInfoo = await apiUrl.data.forEach((l) => k.push(l.capital));
  },

  getAllCountries: async () => {
    const apiUrl = await axios.get("https://restcountries.com/v3/all");
    const apiInfo = await apiUrl.data.map((el) => {
      return {
        id: el.cca3,
        name: el.translations.spa.common,
        bandera: el.flags[1],
        continente: el.region,
        subregion: el.subregion,
        capital: el.capital,
        area: Intl.NumberFormat("de-DE").format(el.area) + " km²",
        poblacion: el.population,
      };
    });
    let hay = await Country.findAll();
    if (!hay[0]) {
      for (let i = 0; i < apiInfo.length; i++) {
        let capi;
        if (!apiInfo[i].capital) {
          capi = "sin capital";
        } else capi = apiInfo[i].capital[0];
        await Country.create({
          id: apiInfo[i].id,
          name: apiInfo[i].name,
          bandera: apiInfo[i].bandera,
          continente: apiInfo[i].continente,
          subregion: apiInfo[i].subregion,
          capital: capi,
          area: apiInfo[i].area,
          poblacion: Intl.NumberFormat("de-DE").format(apiInfo[i].poblacion),
        });
      }
    }

    return apiInfo;
  },
};
