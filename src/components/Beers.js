import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = React.useState([]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    getBeers();
  }, []);

  React.useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((results) => setBeers(results.data))
    .catch((err) => console.log(err.message))
      }, [query]);

  let getBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((results) => setBeers(results.data))
      .catch((err) => console.log(err.message));
  };

  let handleChange = (e) => {
      setQuery(e.target.value);
  } 
 
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Beers</h1>
      <form>
        <input
        onChange={handleChange}
          type="text"
          name="search"
          value={query}
        ></input>
      </form>

      {beers.map(function (beer) {
        return (
          <div>
            <img src={beer.image_url} width="69px" alt="beer" />
            <Link to={`/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
