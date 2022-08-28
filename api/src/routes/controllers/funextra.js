module.exports = {
  notilde: function (letra) {
    return letra
      .replace("á", "a")
      .replace("é", "e")
      .replace("í", "i")
      .replace("ó", "o")
      .replace("ú", "u");
  },
};
