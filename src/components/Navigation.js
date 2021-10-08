import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation = () => {
    return <header>
        <nav className={classes.navLinks}>
            <NavLink activeClassName={classes.navLinkActive} to="/home">Home</NavLink>
            <NavLink activeClassName={classes.navLinkActive} to="/pokemons">Pokemons List</NavLink>
        </nav>
    </header>
}
 
export default Navigation;