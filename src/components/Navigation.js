import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'
import styled from "styled-components";


const NanLinks = styled.nav`
display: flex;
font-size: 3vw;
padding: 0;

& a {
    list-style: none;
    color:white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 10px;
    padding-left: 20px;
    margin: 10px;
    text-decoration: none;
    text-shadow:
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 50px #0fa;
    border-radius: 4vw 0.5vw 0.5vw 0.5vw;
}
`
const Navigation = () => {

     const speak = (msg) => {
        let instance = window.speechSynthesis;
        instance.cancel();
        const speech = new SpeechSynthesisUtterance(msg);
        [speech.voice] = speechSynthesis.getVoices();
        speechSynthesis.speak(speech);
      }
      
   const clickHandler = (content) => {
        speak(content)
      console.log("content", content);
    }

 
    return <header>
        <NanLinks >
            <NavLink  onClick={(ev)=>clickHandler(ev.target.text)} activeClassName={classes.navLinkActive} to="/home">Home</NavLink>
            <NavLink  onClick={(ev)=>clickHandler(ev.target.text)} activeClassName={classes.navLinkActive} to="/pokemons">Pokemons List</NavLink>
        </NanLinks>
    </header>
}

export default Navigation;