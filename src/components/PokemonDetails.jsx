import PokemonList from "./PokemonList";
import styles from "./PokemonDetails.module.css";
import { Link } from "react-router-dom";

const PokemonDetails = (props) => {
  //   console.log({ props });
  //   const pokemon = [...PokemonList];
  return (
    <Link to={`/details/${props.pokemon.id}`} className={`${styles.link}`}>
      <article>
        <div className={`${styles.background}`}>
          <div className={`${styles.container}`}>
            <img
              className={`${styles.image}`}
              src={props.pokemon.sprites.other.home.front_default}
              alt={props.pokemon.name + " image"}
            />
          </div>

          <div className={`${styles.info}`}>
            <p>#{props.pokemon.id.toString().padStart(3, "0")}</p>
            <p>
              {props.pokemon.name.charAt(0).toUpperCase() +
                props.pokemon.name.slice(1)}
            </p> 
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PokemonDetails;