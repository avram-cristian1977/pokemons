import { useParams } from "react-router";
import { useState, useEffect } from "react";
const PokemonDetails = () => {

    let { name } = useParams();

    useEffect(()=>{
        getPokemonInfos()
    }, [] )


    const [pokemonDetails, setPokemonDetails] = useState(null)

    const getPokemonInfos = async () => {
        console.log("fire1");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        console.log("fire", data);
        setPokemonDetails(data)
  }
// console.log(pokemonDetails.name);
    return <>
    {pokemonDetails ? <h2>{pokemonDetails.order}</h2> : ""}
    </>
}
 
export default PokemonDetails;