import { useParams } from "react-router";
import { useState, useEffect } from "react";
import classes from './PokemonDetails.module.css'
const PokemonDetails = () => {

    let { name } = useParams();

    useEffect(() => {
        getPokemonInfos()
    }, [])


    const [pokemonDetails, setPokemonDetails] = useState(null)


    const getPokemonInfos = async () => {
        console.log("fire1");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        console.log("fire", data);
        setPokemonDetails(data)

    }

    if (pokemonDetails) {
        console.log(pokemonDetails.stats);
    }

    const capitalize = (type) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
    let msg;

    return <div className={classes.pokemonDetailsWrapper}>
        {pokemonDetails && <>
            <h2>My name is {capitalize(pokemonDetails.name)}</h2>
            <p className={classes.presentation}>I look like this</p>
            <div className={classes.spritesImagesWrapper}>
                <img src={pokemonDetails.sprites.back_default} alt="sprite" />
                <img src={pokemonDetails.sprites.back_shiny} alt="sprite" />
                <img src={pokemonDetails.sprites.front_default} alt="sprite" />
                <img src={pokemonDetails.sprites.front_shiny} alt="sprite" />
            </div>
            {pokemonDetails.types.length > 1 ? msg = <p>my types are</p> : <p>my type is</p>}
         <div>
         {pokemonDetails.types.map(pokeType => {
                return <span key={pokemonDetails.name} className={classes.typeBadge}>{capitalize(pokeType.type.name)}</span>
            }
            )}
         </div>
            <p>...and I can do this!</p>
            <ul>
                {pokemonDetails.stats.map(stat => {
                    return <li>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                    </li>
                })}
            </ul>
        </>}
    </div>
}

export default PokemonDetails;