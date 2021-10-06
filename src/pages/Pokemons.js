import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { fetchPokemonsData } from '../store'

const Pokemons = () => {

    useEffect(()=>{
        getPokemonsList()
    },[])

    const dispatch = useDispatch()
    const pokemonsListData = useSelector(state => state.pokemons.pokemons)

    console.log("pokemonsListData", pokemonsListData);


    const getPokemonsList = () => {
        dispatch(fetchPokemonsData())
    }

 

    return <h1>list of pokemons</h1>
}
 
export default Pokemons;