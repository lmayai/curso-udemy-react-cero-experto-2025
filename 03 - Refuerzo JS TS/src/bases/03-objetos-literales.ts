const ironman = {
    name: 'Fer',
    lastName: 'Herrera',
    age: 45,
    address: {
        city: 'Ney york'
    }
}
// Esto es un objeto literal, el cual a especifica un tipo, el cual es object

ironman.name = 'Peter'
ironman.lastName = 'Parker'
// La asignación es posible porque se pueden mutar sus proppiedades, mas no 
// la reasingación del objeto

console.log(ironman);

// Esto no cre un clon, sino que asigna el mismo espacio de memoria
const spiderman = ironman 

// Hay varias técnicas varias reasignar o clonar
// 1) El spread operator rompe la referencia l 1er nivel. PEro no a mas niveles
const spidermanSpread = {...ironman}

// 2) structuredClone, clonar a profundidad
const spidermanClone = structuredClone(ironman)
