import React from 'react'
import { Link } from 'react-router-dom'
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemPic from '../assets/pokedex.png'
import BlogPic from '../assets/pokemon-ir.png'
import classes from './footer.module.css'


const Footer = () => {
  return (
    <footer className={classes.footer}>
        <Link to="/pokemons" className={classes.footerLink}>
            <img src={PokemonPic} alt='Pokeball' className={classes.footerIcon}/>
            Pokemons
        </Link >
        <Link to="/items" className={classes.footerLink}>
            <img src={ItemPic} alt='Pokeball' className={classes.footerIcon}/>
            Items
        </Link>
        <Link to="/location" className={classes.footerLink}>
            <img src={LocationPic} alt='Pokeball' className={classes.footerIcon}/>
            Map
        </Link>
        <Link to="/blog" className={classes.footerLink}>
            <img src={BlogPic} alt='Pokeball' className={classes.footerIcon}/>
            PokeBlog
        </Link>

    </footer>
  )
}

export default Footer