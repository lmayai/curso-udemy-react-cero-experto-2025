const firstName = 'Fernando'
const lastName = 'Herrera'
const secondName = "O'neal"

// Donde sta es otra forma de escapar los caracteres
const deOtraForma = "O\'neal \"apellido\""

console.log({deOtraForma});


// Si se quisiera poner un apostrofe no se podría. Pa eso se usan los tempplate string
const middleName = `Herrera Mc'donald "es el nombre de alguien"`


// Para manejar los caracteres especiales es mejor usar template string
// Backtips ` aqui adentro caracteres especiales `
console.log(`El nombre es: ${firstName} ${lastName}`)

// ESTO ES DE TS, no de JS