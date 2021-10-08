import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import classes from './PokemonItem.module.css'

const PokemonItem = ({ name }) => {

    const [pokemonInfos, setPokemonsInfos] = useState(null)

    useEffect(() => {
        getPokemonInfos()
    }, [])

    const getPokemonInfos = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        setPokemonsInfos(data)
    }


    console.log("pokemonInfos infos", pokemonInfos);
    return <>

            <Link to={`/pokemons-details/${name}`} className={classes.pokemonItem}>
        <div className={classes.pokemonCard}>
                <h3>{name}</h3>
                {pokemonInfos ? <img src={pokemonInfos.sprites.front_default} alt="pokePic" /> : ""}
        </div>
            </Link>

    </>
}

export default PokemonItem;