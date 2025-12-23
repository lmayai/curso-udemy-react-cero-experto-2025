import type { GiphyRandomResponse } from "../data/giphy-random.response";

const API_KEY = 'tpjeP5KYM98UhSqCvbEtNU0aEBkoSy81';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

const createImgInDom = (imgUrl: string) => {
    const imgEl = document.createElement('img');
    imgEl.src = imgUrl;
    document.body.append(imgEl)
}

// con then y catch.
// debido a que la respuesta es un json , se usa el response.json() el cual retorna una promesa que debe ser reuelta
myRequest
// .then((response)=> {
//     console.log('response:', response)
//     response.json().then((data) => {
//         console.log('data', data);
//     })
// })

// se pueden hacer respuestas anidadas, entonces la respuesta de la primera romesa, va a la segunda
.then(response => response.json())
// .then((data: GiphyRandomResponse) => {
//     console.log(data);
//     const imagesURL = data?.data.images?.original?.url
//     console.log(imagesURL)
//     const imgE = document.createElement('img');
//     imgE.src = imagesURL;
//     document.body.append(imgE)
// })
// Usando destructuring
.then(({data}: GiphyRandomResponse) => {
    const imagesURL = data?.images?.original?.url;
    createImgInDom(imagesURL);
})
.catch((error) => {
    console.error('error:', error);
})
.finally(()=> {
    console.log('LISTO', )
})


// Anidar respuestas es una opcción pero no es la mejor

/* 2. Las repsuestas no están tipadas, son todas any.
    Para poder tipar las respuestas, se copia la respuesta de la peticion.
    Esa rta se copia a giphy.response.ts
    Se usa CTRL + SHift + P 
    Se busca <Paste Json as Code> 
    Con este logramos hacer los tipos de la respuesta
*/



