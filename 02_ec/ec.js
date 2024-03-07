let booleano = false;
//booleano = booleano || "reasigne valor por esta cadena de texto";
booleano = booleano ?? "reasigne valor por esta cadena de texto";
console.log(booleano);

let cero = 0;
//cero = cero || "reasigno si es null o undefined";
cero = cero ?? "reasigno si es null o undefined";
console.log(cero);

let nula = null;
//nula = nula || "si es nula";
nula = nula ?? "si es nula";
console.log(nula);

const datos = {
  nombre: "nico",
};

datos.apellido = datos.apellido ?? "echeverria";
console.log(datos);
