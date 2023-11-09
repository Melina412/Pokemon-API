import PokemonList from "./PokemonList";
import styles from "./PokemonDetails.module.css";
import { Link } from "react-router-dom";

const PokemonDetails = (props) => {
  //   console.log({ props });
  //   const pokemon = [...PokemonList];
  return (
    <Link to={`/details/${props.pokemon.id}`}>
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
    </Link>
  );
};

export default PokemonDetails;
