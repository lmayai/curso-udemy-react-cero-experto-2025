// Las promesas son esa forma en que se agrega asincronia a JS, esperando que algo se resuelva luego de un tiempo. 

// la promesa recibe un callback el cual se ejecuta luego que la promesa se resuelva
const myPromises = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // Quiero mi dinero
        // resolve(100)
        reject('mi amigo se perdio')
    }, 2000)
})

myPromises
.then(myMoney => {
        console.log(`Tengo mi dinero ${myMoney}`)
    }
)
.catch(reason => 
    console.warn(reason)
)
.finally(()=> {
    console.info('Finalizó, esto siempre se llama, no importa si se resuelve o no')
})

// catch, finally y then
// myMoney es de tipo unkown, donde TS no sabe que tipo de dato es.

// luego al agregar el tipo a la promise <number> aqui ya no es más un generico

// Los genericos en TS son
