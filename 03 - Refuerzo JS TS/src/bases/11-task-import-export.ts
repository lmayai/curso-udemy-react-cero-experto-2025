/**
 * getHeroesByOwner => Hero[]
 * Filtra heroes por su owner
 * @param Owner
 * @return Array de heroes
 * 
 * console.log(getHoroesByOwner('Marvel'))
*/

import {type Hero, heroes, type Owner} from '../data/heroes.data'

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter(hero => hero.owner === owner)
}

console.log(getHeroesByOwner('Marvel'))
console.log(getHeroesByOwner('DC'))
