import { useState } from 'react'


function Navbar ({PokemonIndex, setPokemonIndex, pokemonList}){
  const handleClickPrécedent = () => setPokemonIndex (old => old -1)
  const handleClickSuivant = () => setPokemonIndex (old => old +1)

    return(
    <>
        {PokemonIndex > 0 && <button onClick={handleClickPrécedent}>Précedent</button>}
        {PokemonIndex < (pokemonList.length -1) && <button onClick={handleClickSuivant}>Suivant</button>}  
    </>
      )
}


export default Navbar