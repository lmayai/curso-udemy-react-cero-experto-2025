// Interfaces y Enums

export type Owner = 'DC' | 'Marvel';

export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];

// existen las infterface y los types. Las types definen valores especificos que pueden tener las props, pero las interfaces son contratos para los objetos

//Es posible tambien usar los enums
enum OwnerEnum {
    DC, // 0
    Marvel // 1
}

interface Hero2 {
    id: number;
    name: string;
    owner: OwnerEnum;
}


const heroes2: Hero2[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerEnum.Marvel,
  },
];

// Estos enum es mejor que no tengan el valor por defecto de 0 o 1, porque si llegado el caso esto se comunica con una API, es mejor setear exacto el valor. el enum es mejor que sea así
enum Owner2 {
    DC = 'DC',
    Marve = 'Marvel'
}

const owner3: Owner2 = 'DC'
const owner4: Owner2 = Owner2.DC

export default heroes2;


