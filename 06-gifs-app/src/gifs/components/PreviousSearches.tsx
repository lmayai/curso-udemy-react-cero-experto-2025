import type { FC } from "react"

interface Props {
    searches: string[];
    onHandleTermClick: (term: string) => void
}


export const PreviousSearches: FC<Props> = ({ searches, onHandleTermClick }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map(item => (
                    <li key={item} onClick={() => onHandleTermClick(item)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
