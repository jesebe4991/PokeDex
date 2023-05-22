export type Pokemon = {
    name:string;
    id: string;
    imgSrc: string;
};

export type PokemonDetails = {
    name:string;
    id: string;
    imgSrc: string;
    hp: number;
    attack: number;
    defense: number;
};

export type Article = {
    title:string;
    id: string;
    thumbnail: string;
    content: string[];
}