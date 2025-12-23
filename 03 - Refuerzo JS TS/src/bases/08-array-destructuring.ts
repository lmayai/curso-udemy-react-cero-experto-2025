// 1. en arreglos si importa el orden
const cNames = ['goku', 'vegeta', 'trunks'];

const [p1] = cNames;

console.log(p1) //goku

const [, p2] = cNames; // es necesario usar las comas

console.log(p2) //vegeta 

const [,,p3] =cNames

console.log(p3) //trunks


// ------ 2  ---

// retorna o string o numbers 
const retArrayFn = () => {
    return ['abd', 123] as const;
}

// no es un type safe,
const [letras, numeros] = retArrayFn(); 

// si siempre la primera siempre es un string y la segunda es number, en este caso, el retorno se puede hacer as const

console.log(letras, numeros)

console.log(letras+ 100) // aqui sabe que son string 
console.log(numeros +100) // aqui sabe que son numbers


