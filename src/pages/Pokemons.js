import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchPokemonsData } from '../store'
import PokemonItem from '../components/PokemonItem'
import { Link } from "react-router-dom"
import classes from './Pokemons.module.css'



const Pokemons = () => {

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getPokemonsList()
    }, [])

    const dispatch = useDispatch()
    const pokemonsListData = useSelector(state => state.pokemons.pokemons)
    const isLoading = useSelector(state => state.pokemons.isLoading)



    const getPokemonsList = () => {
        dispatch(fetchPokemonsData())
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }



    return <>
        <h1 className={classes.pokesListTitle}><span>1<sup>st</sup></span> Generation</h1>
        <div className={classes.reduxMsg}>
            {isLoading === "PENDING" && <p style={{ color: "green" }}>LOADING...</p>}
            {isLoading === "REJECTED" && <p style={{ color: "red" }}>Something went wrong. Please try again later.</p>}
            <div className={classes.inputWrapper}>
                   
                    <input className={classes.searchInput} type="text"
                        placeholder="Search by name"
                        onChange={ev => setSearchTerm(ev.target.value)} />
            </div>
        </div>

        <div className={classes.pokemonsWrapper}>


            {pokemonsListData.pokemon_species ? pokemonsListData.pokemon_species
                .filter(pokemons => {
                    if (searchTerm === "") {
                        return pokemons
                    } else {

                        return pokemons = pokemons.name.toLowerCase().startsWith(searchTerm.toLowerCase())
                    }

                })
                .map((pokemon) => {


                    return <>



                        <PokemonItem key={pokemon.name}
                       
                            name={pokemon.name}
                            className={classes.pokemonItem}>
                            {JSON.stringify(pokemon)}
                            <Link to={`/pokemons/${pokemon.name}`} href="#">{pokemon.url}</Link>
                        </PokemonItem>


                    </>

                }) : " "}
        </div>
<div>
<button title="Go top" id={classes.scrollTopBtn} onClick={()=>scrollToTop()}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
</div>
    </>
}

export default Pokemons;