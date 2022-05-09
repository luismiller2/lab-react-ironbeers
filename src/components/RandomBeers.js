import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const RandomBeers = () => {
    const [random, setRandom] = React.useState({});

    React.useEffect(() => {
        getBeers();
    }, []);
  
    let getBeers = () => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((res) => {
            setRandom(res.data[Math.floor(Math.random() * res.data.length)])
          })
          .catch((err) => console.log(err));
      };
  

    return (

        <div>
         <nav>
        <Link to='/'>Home</Link>
        </nav>
        <h1>Random Beer</h1>
            <img src={random.image_url} width= '69px' alt="random"/>
            <h3>{random.name}</h3>
            <p>{random.tagline}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>{random.contributed_by}</p>

        </div>

    )
}

export default RandomBeers;