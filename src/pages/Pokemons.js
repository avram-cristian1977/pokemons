import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchPokemonsData } from '../store'
import PokemonItem from '../components/PokemonItem'
import { Link } from "react-router-dom"
import classes from './Pokemons.module.css'

const Pokemons = () => {

    useEffect(() => {
        getPokemonsList()
    }, [])

    const dispatch = useDispatch()
    const pokemonsListData = useSelector(state => state.pokemons.pokemons)
    const isLoading = useSelector(state => state.pokemons.isLoading)

    console.log("pokemonsListData", pokemonsListData.pokemon_species);


    const getPokemonsList = () => {
        dispatch(fetchPokemonsData())
    }




    return <>
    <h1 className={classes.pokesListTitle}><span>1<sup>st</sup></span> Generation</h1>
    <div className={classes.reduxMsg}>
    {isLoading === "PENDING" && <p style={{ color: "green" }}>LOADING...</p>}
        {isLoading === "REJECTED" && <p style={{ color: "red" }}>Something went wrong. Pleasetry again later.</p>}

    </div>
              <div className={classes.pokemonsWrapper}>
       

        {pokemonsListData.pokemon_species ? pokemonsListData.pokemon_species.map((pokemon) => {
            return <> 
            <PokemonItem key={pokemon.name} name={pokemon.name} className={classes.pokemonItem}>
                {JSON.stringify(pokemon)}
                <Link to={`/pokemons/${pokemon.name}`} href="#">{pokemon.url}</Link>
            </PokemonItem> 
            
            </>

        }) : " "}
            </div>
    </>
}

export default Pokemons;