interface Person {
    name: string;
    lastName: string;
    age: number;
    // address: {
    //     city: string;
    //     postalCode: string;
    // }
    address: Address;
}

interface Address {
    city: string;
    postalCode: string;
}

const ironman = {
    name: 'Fer',
    lastName: 'Herrera',
    age: 45,
    address: {
        city: 'New york',
        postalCode: 'SASD122'
    }
}

console.log(ironman);
// Las interfaces no son clases, son contratos para definir los tipos de las props dentro de un objeto

// Si ahora se quiere definir que el objeta respete el contrato seria asi
// Con ctrl + .  -> Add missing properties
const batman: Person = {
    name: "",
    lastName: "",
    age: 0,
    address: {
        city: "",
        postalCode: ""
    }
}

console.log(batman)


