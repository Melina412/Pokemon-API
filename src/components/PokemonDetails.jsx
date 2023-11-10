import PokemonList from "./PokemonList";
import styles from "./PokemonDetails.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/context";
import { useContext } from "react";

const PokemonDetails = (props) => {
  const { theme } = useContext(ThemeContext);
  //   console.log({ props });
  //   const pokemon = [...PokemonList];
  return (
    <article className={`${styles.article}`}>
      <Link to={`/details/${props.pokemon.id}`} className={`${styles.link}`}>
        <div
          className={`${styles.background} ${
            theme ? styles.dark : styles.light
          }`}
        >
          <div className={`${styles.container}`}>
            <img
              className={`${styles.image}`}
              src={
                props.pokemon.sprites.other.home.front_default
                  ? props.pokemon.sprites.other.home.front_default
                  : props.pokemon.sprites.other["official-artwork"]
                      .front_default
              }
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
      </Link>
    </article>
  );
};

export default PokemonDetails;
