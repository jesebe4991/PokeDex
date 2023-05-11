import Pokedex from '../assets/pokedex.png'
import classes from './loadingScreen.module.css'

export const LoadingScreen = () => {
  return <div className={classes.loadingScreen}>
    <img className={classes.loadingScreenIcon} src={Pokedex} alt="Pokedex" />
    </div>
};
