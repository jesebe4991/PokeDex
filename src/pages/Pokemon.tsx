import { useNavigate, useParams } from "react-router-dom";
import PokeballImag from '../assets/pokeball.png'
import Footer from "../components/Footer";
import classes from './pokemon.module.css'

const Pokemon = () => {
    const {name} = useParams();
    const navigate = useNavigate();
  return (
    <>
      <button className={classes.pokeballButton} onClick={() => navigate(-1)}>
        <img className={classes.pokeballImage} src={PokeballImag} alt="Pokeball" /> Go Back
      </button>
      <div className={classes.pokemon}>
        <main className={classes.pokemonInfo}>
          <div className={classes.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>{name?.toUpperCase()}</div>
          <div>
            <img className={classes.pokemonInfoImg} src={PokeballImag} alt="Pokeball" />
          </div>
          <div>HP: </div>
          <div>Attack: </div>
          <div>Defense: </div>
        </main>
      </div>
      <Footer />   
    </>
  )
}

export default Pokemon