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

const getRandomGif = async () => {
    const response = await myRequest;
    const { data }: GiphyRandomResponse  = await response.json();
    const imgUrl = data?.images?.original?.url
    return imgUrl;
} 

// se puede escribir asi
// getRandomGif().then(img => {
//     createImgInDom(img)
// });

// o asi
getRandomGif().then(createImgInDom)

// tambien con asyn await
// const img = await getRandomGif();
// createImgInDom(img);