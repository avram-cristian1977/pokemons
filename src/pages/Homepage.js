import classes from './Homepage.module.css'

const Homepage = () => {
    return <>
        <p className={classes.welcomeMsg}>Welcome to my pokemons
            <span id={classes.wordCool}>cool</span>
            lection<a href="#"></a>
        </p>
    </>
}
export default Homepage;