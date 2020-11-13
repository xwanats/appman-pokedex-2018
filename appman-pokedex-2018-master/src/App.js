import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css'
import Card from './components/Card'
import Pokedex from "./components/Pokedex";
import Route from "./components/Route";


const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

const App = () => {

  const [pokemonData, setPokemonData] = useState();
  const [errorCheck,setErrorCheck] = useState(false)
  const url="http://localhost:3030/api/cards?"

  //fetch data from API
  const getPokemonData = async () => {
    try {
      let result = await axios.get(`${url}`);
      var { data } = result;
      //setState with the data retrieved
      setPokemonData((prev) => ({ ...prev, ...data }));
    } catch (e) {
      setErrorCheck(e)
    }
  };

  //fetch the data once
  useEffect(() => {
    getPokemonData();
  }, [errorCheck]);

  return (
      <div className="App">
        <div className="container">
          <Route path="/">
            <Pokedex pokemonData={pokemonData} />
          </Route>
          <Route path="/list">
            <Card pokemonData={pokemonData}/>
          </Route>
        </div>
        {/* {pokemonData && pokemonData.cards.map((item) => <li key={item.id}>{item.name}</li>)} */}
      </div>
    )
}

export default App
