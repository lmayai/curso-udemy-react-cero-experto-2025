// Se puede usar axios mejor

import axios from "axios"
import type { GiphyResponseSearch } from "../interfaces/giphy.responses";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    // Para evitar siempre replicar la informacion, se usará una instacia de axios la cual ya contenga la us y la api_key siempre incluida, entoces solo bastaria agregar los query params y lo extra de la url
    // const response = await axios.get<GiphyResponseSearch>('https://api.giphy.com/v1/gifs/search', {
    //     params: {
    //         q: query,
    //         limit: 10,
    //         lang: 'es',
    //         api_key: import.meta.env.VITE_GIPHY_API_KEY
    //     }
    // });

    // Aqui queda mas reducida, se icluye directamente la instacia que llama a axios con la info extra
    const response = await giphyApi.get<GiphyResponseSearch>('/search', {
        params: {
            q: query,
            limit: 10
        }
    });

    console.log(response.data);

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        height: Number(gif.images.original.height),
        width: Number(gif.images.original.width),
    }))

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=tpjeP5KYM98UhSqCvbEtNU0aEBkoSy81&q=${query}&limit=25&lang=en`)
}