const firstName = 'Leo'
const lastName = 'Maya'

let diceNumber = 5
diceNumber = '9'
console.log(firstName, lastName);

const containsH = firstName.includes('h')
console.log({containsH, diceNumber, firstName, lastName})

// TS es un JS con superpoderes, en este caso al pasar el mouse sobre las variables, 
// TS asigna un tipo de variable a la variable. Por eso al tratar de reasignar un valor de
// distinto tipo muestra un error.
// Igualmente deja compilar, porque es JS por debajo, pero no es una practica correcta, ya que
// puede traer errores

// En este caso así se define el tipo de la variable.
let movs: number = 0;