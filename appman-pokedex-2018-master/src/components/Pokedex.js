import React,{useEffect} from 'react'
import '../style/pokedex.css'
const Pokedex = ({pokemonData}) =>{

    return(
    <div>
        <div className="header">
            <h1>My Pokedex</h1>
        </div>
        <div>
            {/* pokemon data goes here */}
            {/* cannot access the obj property*/}
            {console.log(pokemonData)}
        </div>
        <div className="bar">
            <div className ="addBtn">
                <a className="new" href="/list">
                    +
                </a>
            </div>
        </div>
    
    </div>
    )
}
export default Pokedex