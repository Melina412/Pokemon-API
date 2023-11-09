import PokemonList from "./PokemonList";
import styles from "./PokemonDetails.module.css";

const PokemonDetails = (props) => {
  //   console.log({ props });
  //   const pokemon = [...PokemonList];
  return (
    <article className="card">
      <div className="background">
        <img
          src={props.pokemon.sprites.other.home.front_default}
          alt={props.pokemon.name + " image"}
        />
        <div className="info">
          <p>#{props.pokemon.id.toString().padStart(3, "0")}</p>
          <p>{props.pokemon.name}</p>
        </div>
      </div>
    </article>
  );
};

export default PokemonDetails;