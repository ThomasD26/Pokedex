import { useState } from 'react'


function Navbar ({setPokemonIndex, pokemonList}){
  const handleClickPokemon = index => setPokemonIndex (index)
 
   return pokemonList.map(
    (pokemon, index) => <button onClick={() => handleClickPokemon(index)}>{pokemon.name}</button>
    )
      
}


export default Navbar