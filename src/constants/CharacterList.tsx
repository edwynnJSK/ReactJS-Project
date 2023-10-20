export interface ICharacter {
    id:number;
    name:string;
    status:string;
    species: string;
    gender: string;
    imgUrl: string;
}

export const CharacterListConst = [
    {
        id: 1,
        name:"Rick Sanchez",
        status:"Alive",
        species: "Human",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },


    {
        id: 2,
        name:"Morty Smith",
        status:"Alive",
        species: "Human",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },

    {
        id: 3,
        name:"Summer Smith",
        status:"Alive",
        species: "Human",
        gender: "Female",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },

    {
        id: 4,
        name:"Beth Smith",
        status:"Alive",
        species: "Human",
        gender: "Female",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },

    {
        id: 5,
        name:"Jerry Smith",
        status:"Alive",
        species: "Human",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },

    {
        id: 86,
        name:"Cyclops Rick",
        status:"Dead",
        species: "Humanoid",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/86.jpeg"
    },

    {
        id: 349,
        name:"The Scientist Formerly",
        status:"Dead",
        species: "Human",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/349.jpeg"
    },

    {
        id: 218,
        name:"Mechanical Rick",
        status:"unknown",
        species: "Robot",
        gender: "Male",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/218.jpeg"
    },
];