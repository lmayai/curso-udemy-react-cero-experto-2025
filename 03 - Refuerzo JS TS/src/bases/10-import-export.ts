// Import Export 
// Se puede importar por defecto, se puede renombrar
import heroes2 from '../data/heroes.data'

// O se importa de acuerdo a algo expecifico, independientes
// se pueden renombrar
import { heroes as myHeroes, type Hero } from '../data/heroes.data'

// Se recomienda que sea un type o in interface, al momento de importar se le ponga adeltante la palabra type

const getHeroById = (id: number): Hero | undefined => {
    const hero = myHeroes.find(hero => id === hero.id);
    // if (!hero) {
    //     throw new Error(`No existe un hero con el id ${id}`)
    // }
    return hero;
}

console.log(getHeroById(1))
console.log(getHeroById(2))
console.log(getHeroById(3))
console.log(getHeroById(4))
console.log(getHeroById(5))