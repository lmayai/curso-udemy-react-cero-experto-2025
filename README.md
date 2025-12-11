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


## Sección 3: Refuezo JS y TS 
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

