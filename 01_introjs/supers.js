const super1 = {nombre:"Batman"}
const super2 = {nombre:"Mujer Maravilla"}
const super3 = {nombre:"Iron man"}
const super4 = {nombre:"Hulk"}
const super5 = {nombre:"loki"}

function printName(obj) {
    return 'el nombre del superheroe es ${nombre}'
}
    
console.log(printName(super1));
console.log(printName(super2));
console.log(super5.nombre);

super5.edad = 33;
super5.ciudad = "Asgard"

console.log(super5);

super4 = {nombre: "Shehulk"}
console.log(super4);

function printAll(arrayOfSupers) {
    for (let superheroe of arrayOfSupers) {
        //const template = printName(superheroe)
        //console.log(template);
        console.log(printName(superheroe));
    }
}

const array1 = [super1,super2]
printAll(array1)
printAll([super3,super4,super5])
printAll([])