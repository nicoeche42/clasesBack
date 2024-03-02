/* console.log("hola mundo");
console.log("esta es la clase 0 del curso de programacion con backend");
 */
/* string */
const cadenaDeTexto = "con camelCase, no con PascalCase";
console.log(cadenaDeTexto);

/* number */
let number = 1234.41568;
console.log(number);

/* boolean */
const verdadero = true; //false
console.log(verdadero);

const datos = {
  cadenaDeTexto: cadenaDeTexto,
  number: number,
  verdadero: verdadero,
};
console.log(datos);

/* array */
const arreglo = [1, "uno", datos, verdadero];
console.log(arreglo);

number = 1234;
console.log(number);

datos.fechaDeNacimiento = new Date("1990/07/09");
datos["fecha"] = 1990;
console.log(datos);
