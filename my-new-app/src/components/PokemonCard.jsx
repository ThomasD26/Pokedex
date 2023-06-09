import PropTypes  from "prop-types"

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired,
} 


  function PokemonCard(props) {
    console.log(props)
    return <figure> 
                {props.pokemon.imgSrc? <img src= {props.pokemon.imgSrc} alt={props.pokemon.name}/> : <p>???</p>}
                <figcaption>{props.pokemon.name}</figcaption> 
            </figure>
    
}


export default PokemonCard