// con el : se define el tipo de returno de la functions

function greet(name: string): string {
    return `Hola ${name}`
}

// como arrow function sería así
const greet2 = (name: string) => `Hola ${name}`

const message = greet('Juan')
const message2 = greet('Pedro')

console.log(message);
console.log(message2);

// La diferencia entre ambas es que la funcion de flecha no cambia lel objeto this
// ptra cosa es que las funciones flecha no permiten ser reasginadas, ya que son contastes, pero las tradicionalesn si dejan reescreibir la funcion greet origina

greet = function() {
    return 'Hola nuevo'
}


function getUsers() {
    return {
        uid: 'ABC-123',
        username: 'lolo'
    }
}

const getUsers2 = () => ({
    uid: 'AB-12',
    username: 'lala'
})

const user = getUsers()
console.log(user)
const user2 = getUsers2()
console.log(user2)


// Las arrows functions son muy utilizadas en el caso e los callback.
const myNumbers: number[] = [1,2,3,4]

// Esto funciona pero no es lo más utilizado, a parte que e dificil de leer
myNumbers.forEach(function(n){
    console.log(`El num: ${n}`)
})

// Esos callback se usan con arrow functions, son funciones anonimas que se pasan como parametros a una funcion
myNumbers.forEach((n) => console.log(`El num ${n}`))

// Si se quisiera imprimir unicamente el valor directo, como console.log recibe un value, y ese valor es el que se pasa a la funcion, se muestra una versión reducida
myNumbers.forEach(value => console.log(value))
myNumbers.forEach(console.log) 

// la version extendida sería
myNumbers.forEach((value, index, array) => console.log(value, index, array))