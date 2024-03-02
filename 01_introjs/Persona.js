class Persona {
  static cantidadDePersonas = 0;
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida || 100;
    Persona.cantidadDePersonas++;
  }
  comer(cantidad) {
    this.vida < 150
    ? (this.vida = this.vida + cantidad)
    : console.log("No podes comer mas");
  }
  entrenar(cantidad) {
    if (this.vida > 50) {
        this.vida = this.vida - cantidad;
    } else {
        console.log("No podes entrenar mas");
    }

  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
  }
}

const persona1 = new Persona("igna", 33, "rosario", 120);
persona1.comer(20);
persona1.entrenar(10);
persona1.comer(50);
persona1.comer(20)
const persona2 = new Persona("talia", 20, "cordoba");
persona2.comer(10);
persona2.entrenar(30);
persona2.comer(50);
persona2.mudarse("mendoza")
const persona3 = new Persona("sofia", 35, "caba", 120);
console.log(persona3);
persona3.entrenar(50);
console.log(persona3);
persona3.comer(10);
console.log(persona3);
persona3.entrenar(30);
console.log(persona3);
persona3.entrenar(30);
console.log(persona3);
persona3.entrenar(30);
console.log(persona3);
persona3.entrenar(30);
console.log(persona3);

const persona4 = new Persona("carlos", 80, "tucuman");

console.log(persona1);
console.log(persona2);
console.log(Persona.cantidadDePersonas);
