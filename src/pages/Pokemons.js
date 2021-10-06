import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { fetchPokemonsData } from '../store'

const Pokemons = () => {

    useEffect(()=>{
        getPokemonsList()
    },[])

    const dispatch = useDispatch()
    const pokemonsListData = useSelector(state => state.pokemons.pokemons)
    const isLoading = useSelector(state => state.pokemons.isLoading)

    console.log("pokemonsListData", pokemonsListData.results);


    const getPokemonsList = () => {
        dispatch(fetchPokemonsData())
    }

 

    return <>
    <h1>list of pokemons</h1>
    {isLoading === "PENDING" && <p style={{ color: "green" }}>LOADING...</p>}
    {isLoading === "REJECTED" && <p style={{ color: "red" }}>Something went wrong. Pleasetry again later.</p>}
    
    {pokemonsListData.results ? pokemonsListData.results.map((pokemon)=>{
        return <div key={pokemon.name}>{pokemon.name}
        <a href="#">{pokemon.url}</a>
        </div>
        
    }) : " "}
    </>
}
 
export default Pokemons;