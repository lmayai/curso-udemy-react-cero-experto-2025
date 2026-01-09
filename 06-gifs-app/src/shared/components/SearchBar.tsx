import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query)
        }, 700)

        // console.log('Hola desde el EFECTO');
        // onQuery(query);

        return () => {
            clearTimeout(timeoutId);
            console.log('Funcion de limpieza, se llama cuando el componente se desmonta y cuando se volverá a llamar el efecto');
        }
    }, [query, onQuery])

    // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onQuery(query)
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e?.target?.value || '')}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => onQuery(query)}>Buscar</button>
        </div>
    )
}

