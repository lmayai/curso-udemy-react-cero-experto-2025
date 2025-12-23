// 1.
const person = {
    name: 'Jjuan',
    age: 45,
    key: 'jj'
}

// La desestructuracion es la forma en que se puede desarmar un objeto, para granular una de sus props.

// si se quiere tomar solo el nombre de la persona, lo más común es hacer esto.
const personName = person.name

// Con destructuring sería
const {name, key, age} = person

console.log(personName, name)

// 2. 
interface Hero {
    name: string;
    age: number;
    key: string;
    // rank?: string; // significa que puede estar definido o se un string
    // rank: string | undefined; // tambien se puede
    rank?: string
}

const useContext = (hero: Hero) => {
    const {age, key, name, rank} = hero; // esto se puede usar arribita tambien
    return {
        keyName: 'ABC',
        user: {
            name: name, // asi sirve
            key, // o así, si tiene el mismo nombre
            age,
        }, 
        rank
    }
}

const context = useContext(person)

// con la siguiente desestructuracion se puede buscar entre niveles mas profundos, y ademas para evitar que tenga el mismo nombre de la prop, se puede renombrar usarndo los (: colon)
const { keyName: keyNameD, rank: rankD, user: { name: nameD , key:keyD, age: ageD} } = useContext(person)

console.log(context)
console.log({rankD, keyNameD, nameD, keyD, ageD})