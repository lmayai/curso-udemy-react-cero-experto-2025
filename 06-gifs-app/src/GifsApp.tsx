import { mockGifs } from "./mocks-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { GifsList } from "./gifs/components/GifsList"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);
	const [gifs, setGifs] = useState<Gif[]>([])

	const handleTermClick = (term: string) => {
		console.log({ term });
	}

	/*
	Implementar la función handleSearch que debe:
		- Validar que el query no esté vacío
		- Convertir el query a minúsculas y eliminar espacios en blanco
		- Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
		- Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
	*/

	// Forma 1
	// const handleSearch = (query: string) => {
	// 	if (query) {
	// 		const queryToSearch = query.toLowerCase().trim();
	// 		if (!previousTerms.some(t => t === queryToSearch)) {
	// 			setPreviousTerms((prev) => {
	// 				prev.unshift(queryToSearch)
	// 				if (prev.length > 8) prev.pop()
	// 				return prev;
	// 			})
	// 		}
	// 	}
	// 	console.log({ query });
	// }

	// Forma 2
	// const handleSearch = (query: string = '') => {
	// 	query = query.trim().toLowerCase();
	// 	if (!query || previousTerms.includes(query)) return;
	// 	const newTerms = previousTerms.slice(0, 7);
	// 	newTerms.unshift(query)
	// 	setPreviousTerms(newTerms);
	// }

	// Forma 3
	const handleSearch = async (query: string = '') => {
		query = query.trim().toLowerCase();
		if (!query || previousTerms.includes(query)) return;
		setPreviousTerms([query, ...previousTerms].slice(0, 7));
		const gifs = await getGifsByQuery(query);
		console.log({ gifs });
		setGifs(gifs)

	}

	return (
		<>
			{/* Header */}
			{/* <h1 className="content-center">Buscador de Gifs</h1>
			<p>Descubre y comparte GIFS</p> */}
			<CustomHeader
				title="Buscador de gifs"
				description="Descubre y comparte GIFS"
			/>

			{/* Search */}
			{/* <div className="search-container">
				<input type="text" placeholder="Busque gifs" />
				<button>Buscar</button>
			</div> */}
			<SearchBar
				placeholder="Busque gifs"
				onQuery={handleSearch}
			/>


			{/* Búsqueda previa */}
			{/* <div className="previous-searches">
				<h2>Busquedas previas</h2>
				<ul className="previous-searches-list">
					<li>Goku</li>
					<li>Saitama</li>
					<li>Elden ring</li>
				</ul>
			</div> */}
			<PreviousSearches searches={previousTerms} onHandleTermClick={handleTermClick} />

			{/* Gifs */}
			{/* <div className="gifs-container">
				{
					mockGifs.map(gif => (
						<div key={gif.id} className="gif-card">
							<img src={gif.url} alt={gif.title} />
							<h3>{gif.title}</h3>
							<p>
								{gif.width}x{gif.height} (1.5mb)
							</p>
						</div>
					))
				}
			</div> */}
			<GifsList gifs={gifs} />

		</>
	)
}
