// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeers from './components/NewBeers';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/beers' element={<Beers/>}></Route>
      <Route path='/randomBeers' element={<RandomBeers/>}></Route>
      <Route path='/newBeers' element={<NewBeers/>}></Route> 
      <Route path='/:id' element={<BeerDetails/>}></Route>


    </Routes>
     
    </div>
  );
}

export default App;
