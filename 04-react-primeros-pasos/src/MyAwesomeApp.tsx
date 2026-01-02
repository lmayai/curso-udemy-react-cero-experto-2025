import type { CSSProperties } from "react";

const firstName = 'Fernando';
const lastName = 'Herrera';

const favoriteGame = ['Smash', 'One', 'Owpss']
const isActive = true;

const address = {
    zipCode: '1212AWDAD',
    country: 'Canada'
}

// Al estar afuera las constantes, es mejor para react.
// React siempre que se vuelve a ejecutar puede llamar al componente, entonces en el llamdo evita que react tome esos valores dentro de la ejecucion y lo analice. Entonces para contastes que nunca cambian, es mejor por fuera
// evita que react

// Al agregarle el tipo, estamos ayudando al editor de cdigo a completar las propiedades de CSS, sirve mucho para identificar variables

const myStyles: CSSProperties = {
    backgroundColor: isActive ? 'green' : 'red',
    borderRadius: '12px',
    padding: 10,
    marginTop: 50
}


export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGame.join(', ')}</p>
            <p>{isActive ? 'Está activo' : 'No está activo'}</p>
            <p
                // style={{
                //     backgroundColor: 'red',
                //     borderRadius: '12px',
                //     padding: 10
                // }}
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    );
}