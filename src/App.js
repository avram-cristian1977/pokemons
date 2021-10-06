import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Pokemons from './pages/Pokemons';
import PokemonDetails from './pages/PokemonDetails'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return <>
    <Navigation/>
    <Switch>
      <Route path="/home">
        <Homepage/>
     </Route>
     <Route path='/' exact>
          <Redirect to="/home"></Redirect>
      </Route>
     <Route path="/pokemons" exact>
        <Pokemons/>
     </Route>
     <Route path="/pokemons/:id">
        <PokemonDetails/>
     </Route>
     <Route path="*">
          <PageNotFound />
        </Route>
    </Switch>
  </>
   
  
}

export default App;
