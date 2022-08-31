export function filtromenos(a, b) {
  let c = Number(a.poblacion.replace(/[.]/g, ""));
  let d = Number(b.poblacion.replace(/[.]/g, ""));

  if (c === d) {
    return 0;
  }
  if (c < d) {
    return -1;
  }
  return 1;
}

export function filtromas(a, b) {
  let c = Number(a.poblacion.replace(/[.]/g, ""));
  let d = Number(b.poblacion.replace(/[.]/g, ""));

  if (c === d) {
    return 0;
  }
  if (c > d) {
    return -1;
  }
  return 1;
}

export function organizar(pais) {
  const ascen = pais.sort(function (a, b) {
    if (a.name === b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });

  return ascen;
}

export function alfabetoc(dato, pais) {
  if (dato === "asc") {
    const ascen = pais.sort(function (a, b) {
      if (a.name === b.name) {
        return 0;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });

    return ascen;
  }
  if (dato === "desc") {
    const desc = pais.sort(function (a, b) {
      if (a.name === b.name) {
        return 0;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });

    return desc;
  } else return pais;
}

export function fitraActividad(nombre, pais) {
  const resul = pais.filter((p) =>
    p.activityturists.find((a) => a.name === nombre)
  );
  return resul;
  console.log(resul);
}

export function Actividades(pais2) {
  const act = [];
  const sacar = pais2.forEach((p) =>
    p.activityturists.forEach((p) => act.push(p.name))
  );
  const actlisto = act.filter((valor, indice) => {
    return act.indexOf(valor) === indice;
  });

  return actlisto;
}
