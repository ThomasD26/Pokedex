import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"

function App(){
  
  const [PokemonIndex , setPokemonIndex] = useState(0)
  const handleClickSuivant = () => setPokemonIndex (old => old +1 )
  const handleClickPrécedent = () => setPokemonIndex (old => old -1 )

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

return(
  <div>
    <PokemonCard pokemon = {pokemonList[PokemonIndex]}/>
    {PokemonIndex > 0 && <button onClick={handleClickPrécedent}>Précedent</button>}
    {PokemonIndex < (pokemonList.length -1) && <button onClick={handleClickSuivant}>Suivant</button>}
  </div>
)

}

export default App
