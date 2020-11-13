import React, {useEffect} from "react";
import "../style/searchBarStyle.css";

const SearchBar = ({ pokemonData }) => {
  
  const showPokemon = () =>{
    console.log(pokemonData.cards)
  }
  return (
    <div className="formContainer">
      <form>
        <div>
          <input
            className="searchBar"
            type="text"
            placeholder="Find Pokemon"
            onChange={showPokemon}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
