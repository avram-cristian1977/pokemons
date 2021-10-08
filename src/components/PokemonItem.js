import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const PokemonItem = ({name}) => {

    const [pokemonInfos, setPokemonsInfos] = useState(null)

    useEffect(()=>{
        getPokemonInfos()
    }, [] )

const getPokemonInfos = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      setPokemonsInfos(data)
}


console.log("pokemonInfos infos", pokemonInfos);
    return <>
    <h2>{name}</h2>
 
 {pokemonInfos ? <img src={pokemonInfos.sprites.front_default} alt="sdsfdghgdgdsfdas" /> : ""}
    <Link to={`/pokemons-details/${name}`}>{name}</Link>
    </>
}
 
export default PokemonItem;