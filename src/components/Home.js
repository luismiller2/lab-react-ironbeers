import React from "react";
import BeersImage from "../assets/beers.png";
import RandomBeersImage from "../assets/random-beer.png";
import NewBeersImage from "../assets/new-beer.png";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
        <h1>Home</h1>
        <br></br>

        <img src={BeersImage} alt='beers'/>
        <Link to='/beers'><h2>Beers</h2></Link>
        <br></br>

        <img src={RandomBeersImage} alt='random beers'/>
        <Link to='/RandomBeers'><h2>Random Beer</h2></Link>
        <br></br>

        <img src={NewBeersImage} alt='new beers'/>
        <Link to='/NewBeers'><h2>New Beer</h2></Link>
        <br></br>

        </div>
    )
}

export default Home;