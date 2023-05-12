import { useNavigate, useParams } from "react-router-dom";
import PokeballImag from '../assets/pokeball.png'
import Footer from "../components/Footer";
import classes from './pokemon.module.css'
import { useState, useEffect } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../apis/fetchPokemon";
import { waitFor } from "../utils/utils";
import { LoadingScreen } from "../components/LoadingScreen";

const Pokemon = () => {
    const [isLoading, setIsLoading]  = useState(false)
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const {name} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      async function getPokemn() {
        setIsLoading(true)
        await waitFor(600);
        const fetchPokemons = await fetchPokemon(name as string)
        setPokemon(fetchPokemons)
        setIsLoading(false)
      }
      getPokemn();
    }, [name])
    if(isLoading || !pokemon){
      return <LoadingScreen />
    }
  return (
    <>
      <button className={classes.pokeballButton} onClick={() => navigate(-1)}>
        <img className={classes.pokeballImage} src={PokeballImag} alt="Pokeball" /> Go Back
      </button>
      <div className={classes.pokemon}>
        <main className={classes.pokemonInfo}>
          <div className={classes.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nro.{pokemon?.id}</div>
          <div>
            <img className={classes.pokemonInfoImg} src={pokemon?.imgSrc} alt="Pokeball" />
          </div>
          <div>HP: {pokemon?.hp} </div>
          <div>Attack: {pokemon?.attack} </div>
          <div>Defense: {pokemon?.defense} </div>
        </main>
      </div>
      <Footer />   
    </>
  )
}

export default Pokemon