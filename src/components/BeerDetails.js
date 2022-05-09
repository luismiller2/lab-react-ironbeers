import React,  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

import axios from "axios";
// import { useState } from "react/cjs/react.production.min";


const BeerDetail = ({ match }) => {
    const [beer, setBeer] = useState([]);
    const params = useParams()

  useEffect(() => {
      console.log(params)
      fetchBeer();
  }, []);

  const fetchBeer = () => {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${params.id}`
        )
        .then((res) => {
          setBeer(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    return (

        <div>
        <nav>
        <Link to='/'>Home</Link>
        </nav>

            <h1>Beer Details</h1>
            <img src={beer.image_url} width= '69px' alt="beer"/>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>

        </div>

    )
}

export default BeerDetail