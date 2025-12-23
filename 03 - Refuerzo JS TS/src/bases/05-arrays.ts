const myArray = [1,2,3,'3'];

myArray.push(4);
myArray.push('5');

console.log(myArray)

for (let v of myArray) {
    console.log(v + 10);
    
}

// Para evitar problemas con los tipos, TS permite deifnir el tipo de los arreglos. Más allá que JS permita eso ya que es interpretado, agregarle el tipo agrega una capa de seguridad extra.

const myArray2: number[] = [1,2,3]

// Se sabe que esto copia la posicion de memoria, entonces todo lo que pase en uno pasa en el otro
const myArray3 = myArray2;
myArray2.push(4)
// Se usa el spread operator para tipos simples
const myArray4 = [...myArray2]
myArray2.push(5)
// Si tiene objetos dentro, se usa el structured clone
const myArray5 = structuredClone(myArray2);
myArray2.push(6)
console.log({myArray2, myArray3, myArray4, myArray5});

