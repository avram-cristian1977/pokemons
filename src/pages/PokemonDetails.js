import { useParams } from "react-router";
import { useState, useEffect } from "react";
// import classes from './PokemonDetails.module.css'
import styled from "styled-components";
import { useHistory } from "react-router";


const Presentation = styled.p`
font-family: 'Oswald', sans-serif;
`
const TypeBadge = styled.span`
background-color: rgb(72, 75, 74);
    border-radius: 5px;
    padding: 3px 7px 6px 7px;
    margin: 3px;
`
const SpritesImagesWrapper = styled.div`
@media (max-width:750px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`
const PokemonDetailsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(58, 26, 88, 0.5);
width: 40%;
margin: auto;
border: 2px solid white;
border-radius: 80px 20px 20px 20px;

@media (max-width:1100px) {
    width: 80%;
}

@media (max-width:390px) {
    .pokemonDetailsWrapper img{
        width: 50px
    }
}
    & ul{
        padding: 0;
        margin: 0;
    }

    & ul li {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        transition: all 0.5s ease;
        margin: 2px;
    }

    & ul li:hover{
        transform: scale(1.1);
    }

    & ul h2{
        margin-top: 10px;
    }

    & ul p{
        margin: 0px;
    }

    & ul li:nth-child(even) {
        background-color: rgba(83, 6, 60, 0.5);
    }

    & ul li:nth-child(odd) {
        background-color: rgba(8, 26, 77, 0.5);
    }

    & ul li:last-child {
        margin-bottom: 20px;
    }

    & ul li span{
        margin: 0 5px 0 5px
    }

    & p{
        margin:20px
    }

    & img{
        border: 2px solid white;
        margin: 10px;
        border-radius: 5px;
    }
`

const BackBtn = styled.button`
background-color:white;
color:"blue";
padding:5px 10px 5px 10px;
border-radius:3px;
margin:5px;
border:none;
   
   & :hover {
       cursor:pointer;
   }
`

const PokemonDetails = () => {

    const history = useHistory()
    let { name } = useParams();

    useEffect(() => {
        getPokemonInfos()
    }, [])


    const [pokemonDetails, setPokemonDetails] = useState(null)

    const backHandler = () => {
        history.replace('/pokemons')
    }

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

    return <PokemonDetailsWrapper >
        {pokemonDetails && <>
            <h2>My name is {capitalize(pokemonDetails.name)}</h2>
            <Presentation >I look like this</Presentation>
            <SpritesImagesWrapper>
                <img src={pokemonDetails.sprites.back_default} alt="sprite" />
                <img src={pokemonDetails.sprites.back_shiny} alt="sprite" />
                <img src={pokemonDetails.sprites.front_default} alt="sprite" />
                <img src={pokemonDetails.sprites.front_shiny} alt="sprite" />
            </SpritesImagesWrapper>
            {pokemonDetails.types.length > 1 ? msg = <p>my types are</p> : <p>my type is</p>}
            <div>
                {pokemonDetails.types.map(pokeType => {
                    return <TypeBadge key={pokemonDetails.name} >{capitalize(pokeType.type.name)}</TypeBadge>
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
        <BackBtn title="back" onClick={() => backHandler()}><i className="fas fa-long-arrow-alt-left"></i></BackBtn>
    </PokemonDetailsWrapper>
}

export default PokemonDetails;