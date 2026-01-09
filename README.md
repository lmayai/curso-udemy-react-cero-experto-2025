# curso-udemy-react-cero-experto-2025

# Seccion 1: Intro

Es el curso de Fernando herrrera de Udemy

https://github.com/lmayai/curso-udemy-react-cero-experto-2025.git


Material adjunto
https://gist.github.com/Klerith/babd55ca1526ac882882888f75de208f


# Seccion 2: Intro a React y conceptos generales

## Que es React y por que usarlo?
Antes de React, las aplicaciones se hacian con JS puro  Jquery. Maso así.

```javascript
const button = document.querySelector('button');
let contador = 0;
button.addEventListener('click', () => {
    contador++;
    document.querySelector('#contador').innerText = contador;
});
```
- Manipular manualmente el DOM. Decir como y donde
- Código difícil de mantener Y ESCALAR
- Sin estructura clara

La propuesta de React es:
- Ser una libreria para construir interfaces.
- Usa la sintaxis de JSX o TSX (Typescript + JSX). Luce como HTML pero no lo es.
- Tener componentes reutilizables parametrizablez y predecibles.
- Virtual DOM: React crea una copia del DOM en memoria y solo actualiza lo que cambia.

Luce así:
1) Creamos una funcion
2) Retornamos un HTML. Los corchetes son expresiones en JS
3) Creamos una pieza usando un HOOK(Funciones bonitas). Esta vez con UseState.
4) Crear un funcion controladora

```jsx
import {useState} from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            <p>Haz hecho click {count} veces</p>
            <button onClick={handleClick}></button>
        </div>
    );
}
```
React es simplemente una libreria que permite construir interfaces de usuarios usando componentes reutilizables. Es como crear piezas de lego. 

-  Por que tan popular
    - Ha tenido muy pocos breaing changes a lo largo de su creción. Lo cual hace que se debo arreglar poco en una app ya desarrollada. 
    - Tiene una comudidad grande.


## Puntos importantes
- Es una librería para crear interfaces de usuario UI
- No impone reglas esttricta sobre como estructurar proyectos.

Si se us como libreria se debe decidir
- Como gestionar el sistema de rutas
- Como manipular las peticiones HTTP

Pero si se usa react como framewokr, usando un metaframework, estos ya continuen
- Manejo del sistema de rutas.
- Peticiones http
- Pruebas automatics
- Ya tiene la estructura definida y completa.


## Debe usarse como libreria o como framework.
La libreria oficial recomienda si e usa como libreria usar **Vite**
Si es como framework usar **Next JS, React Router o Expo (para app nativas)** 

Para el futuro habran otros frameworks como:
- RedwoodJS
- TanStack Start

### Como libreria serían:
- Rutas: React router, Tanstack router
- Data fetching: Rreact query, SWR, TRK query
 
Las cuales añaden comportamientos. Los cuales se instalan.

### Lenguaje
Se peude trabajar con JS, pero se recomienda usarlo con TS, ya que es un superset de JS, y esta orienado a trabajarlo con todos los frameworks mas comunes.

JS
- Rapido 
- menos seguro
- Flexible
- Dificil e escalar

TS
- Mas estructura
- Mas seguro, evita errores comunes
- Intellisenses + ayuda del editor
- Escalable en equipos

Entonces usaremos REACT + TS


# Sección 3: Refuezo JS y TS 
    npm create vite

Para correr un proyecto con VIte

    npm run dev

- Node modules: dependencias
- public
- src: código
- gitignore
- index.html
- package.json: Dice versión, nombre y scripts. Mas las dependencias a instalar sea en el ambiente local o en prod.
- tsconfig.json: Configura ts en el proyecti

Para correr los scripts siempre es con *npm run < nombre del script >*

Para los giphys
- https://developers.giphy.com/

Para practicar el fetch API

# Sección 4: Primeros pasos REACT
En esta sección, se abordarán los fundamentos de React y conceptos esenciales como:

- Componentes
- Estructura y nomenclatura
- Hook - useState
- CSS condicional
- Módulos de css
- Impresiones de variables
- Props

El objetivo de esta sección es establecer una base sólida en los fundamentos de React, sobre la cual podamos continuar desarrollando.

# Sección 5: Pruebas automatizadas unit testing
Temas puntuales
En esta sección inicial de testing, aprenderemos muchas cosas útiles para nuestro camino a la hora de realizar pruebas automáticas.

Puntualmente veremos:
- Vitest
- Vitest UI
- Índice de cobertura
- Describe y Test
- Espías
- Mock
- Mock sobre componentes
- Depuración en consola
- Snapshots
- Esperar argumentos específicos en funciones
- Integración con Testing Library

Es una sección que puede sentirse abrumadora, pero deja las bases de todo lo que necesitamos para probar aplicaciones de React y código de JavaScript/TypeScript

### Testing
No son una perdidad de itempo
-  Generan calidad, detectan errores, facilitan el mantenimiento, aceleran el desarrollo con  integraciones continuas y despliegues seguros

Tipos
- unitarias: enfocado en partes atómicas
- integración: como reaccionan varias piezas en conjunto
- E2E - End to end: Ejecuta todo un flujo continuo como lo haría un usuario

Unitarias
- Deben ser atomicas
- No deben ser dependientes de otros componentes
- Debe ser especializada en la pieza

Integración
- Como funciona en conjunto
- No deben ser mayores a las unitarias

E2E
- Probar flujos completos
- Obejitovs específicos
- Pruebas de casos improbables

Caracteristicas
-  Facil de leer
- Facil de escribir
- Parametrizables
- Rapidas
- Flexibles

Triple A (Como estructurar las pruebas)
- Arrange: Importar, inicializaciones
- Act: Applicar estimulos, llamar metodos, simluamos clicks. Disparos
- Assert: Que debió suceder

Mitos
- Llegan a prod. No llegan a prod
- Las pruebas no pueden fallar
- Hace lenta la app
- Es perder el tiempo
- Hay que probar todo. Toca probar lo más importante

Coverage, covertura
- Coberturna de lineas:
- Cobertura de ramas: 
- Cobertura de funciones: 
- Cobertura de condicione:

### Que usar
Se puede usar Vitest o Jest

    npm install -D vitest

Para correr los archivos es con 

    npm run test

https://vitest.dev/guide/

### Testing library
Se usa para simular interacciones en los suit tests. Si no es un hook o no es un componente de react no hace falta. Pero si se necesita montar el componente en el archivos de pruebas, se usa testing library

https://testing-library.com/

    npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom

- screen
    Siempre se actualiza

screen.getByTestId('<id>')

Ene html se pone como atributo
<h1 data-testid="first-name-label">{firstName}</h1>

- render

### Palabras especiales
- .toBe = Verifica igualdad
- .toContain = No verifica con espacios en blanco. 

### Snapshots
Es una fotografia que se le hace al compnente renderizado. Muy util si se quiere verificar que la estructura fisica del componente creado es igual a la fotografia tomada

- Es muy estricto y rigido, como crea un archivo que es la estructura del archivo HTML creado, si se hace un cambio en el HTML este fallará. 

Para corregir basta con eliminar el archivo o actualizarlo en la misma consola con el **u**

    Los test-id no son la mejor idea, no gusta depender de los data atributes para testing. Ya que son del HTML

Solo usar los snapshots solo si el componente ya no va a cambiar

- Container es u elemento HTML estatico del renderizado inicial
- Screen apunta al estado actual del dom y cambia desdepues de los eventos
- Mock: se moquea para aislar el componente padre sin necesidad de llamar a los hijos
- fireEventClick de REact testing library simula eventos como el click
- Cobertura muestra que partes no han sido prodadas
- co la tecla u se actualiza el snapshot
- el afterEach se llama cada que termine una prueba, muyy util para limpiar el historial de llamados mock y evitar que una pruebe afecte otra
- no siempre es necesario usar data-testid, porque vuelve muy dependiende el dom pa las pruebas. Hay otros mecanismos con screen para buscar por rol, texto o label.

# Sección 6: GifExpertApp 
En esta sección comenzaremos a trabajar de una forma estructurada React, que nos permita escalar proyectos y empezar a dejar el pensamiento de que necesitamos la separación en componentes pequeños fáciles de reutilizar y probar.

Puntualmente veremos:
- Peticiones HTTP
- Debounce
- Manejo de estado
- Comunicación entre componentes
- useEffect
- Variables de entorno
- Fuentes personalizadas
La idea principal es dejar las bases de cómo podemos trabajar aplicaciones en React que nos permitan crecer y reutilizar su contenido a futuro.

## App
La app puede estar perfectamente asi
```tsx
export const GifsApp = () => {
  return (
    <>
      <h1 className="content-center">Buscador de Gifs</h1>
      <p>Descubre y comparte GIFS</p>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Busque gifs" />
        <button>Buscar</button>
      </div>

      {/* Búsqueda previa */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Elden ring</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
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
      </div>
    </>
  )
}
```
Pero esto es mejor separarlo por componentes.

## Use effect
Efectos secundarios

```tsx
useEffect(() => {
    const timeoutId = setTimeout(() => {
        onQuery(query)
    }, 700)

    return () => {
        clearTimeout(timeoutId);
    }
}, [query, onQuery])
```
Aqui se explica como hacer un debounce con efectos

El efecto se llama un vez hay un cambio en una de las dependecias, en ste caso es query y onQuery.
Justo antes de ejecutar todo lo que hay dentro del efecto, se llama el metodo de retorno del efecto. Que ara este caso seria el que limpia el timeout. Entonces si no han pasado 700ms no se llamara al onQuery, porque se esta llamadao repetidamente el efecto y esto limpia el timeout.
- Esto es un truco para hacer un debounce con efectos de react

