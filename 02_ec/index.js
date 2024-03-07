const n1 = 10;
const n2 = 5;
const n3 = 50;

const c1 = "   hola";
const c2 = "chau   ";
const c3 = "       holaaaaa      ";

const obj = {
  nombre: "ne",
  edad: 30,
  ciudad: "amba",
  color: "verde",
  mascota: "penco",
};

const exponencial1 = n2 ** n1;
console.log(exponencial1);
const exponencial2 = n1 ** n2;
console.log(exponencial2);

const arrayDeCadenas1 = [c1.trim(), c2.trim(), c3.trim()];
console.log(arrayDeCadenas1.includes(c2));
console.log(arrayDeCadenas1.includes(c3));

const arrayDeCadenas2 = ["hola", "chau", "holaaaaa"];
console.log(arrayDeCadenas2.includes("hola"));
console.log(arrayDeCadenas2.includes("chau"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const { nombre, edad, ...rest } = obj;
console.log(nombre);
console.log(edad);
console.log(rest);

const cadenasYnumeros = { c1, c2, c3, n1, n2, n3 };
console.log(cadenasYnumeros);
