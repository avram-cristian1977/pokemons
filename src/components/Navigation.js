import { NavLink } from "react-router-dom";

import './Navigation.css'
const Navigation = () => {
    return <header>
        <nav>
            <NavLink activeClassName="navLinkActive" to="/home">Home</NavLink>
            <NavLink activeClassName="navLinkActive" to="/pokemons">Pokemons List</NavLink>
        </nav>
    </header>
}
 
export default Navigation;