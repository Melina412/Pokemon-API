// Styling
import style from "./Detailpage.css";

import FetchData from "../components/FetchData";
import { useRef } from "react";
import { useContext } from "react";
import { FetchContext } from "../Context/context";
import { useParams, Link } from "react-router-dom";
import TypeButtons from "../components/searchpage/TypeButtons";
import { ThemeContext } from "../Context/context";

export default function DetailPage(props) {
  const { theme } = useContext(ThemeContext);
  console.log("Hallooooooooo" + theme);

  const { pokemonList, setPokemonList, pokemonDataArray, setPokemonDataArray } =
    useContext(FetchContext);
  console.log(props.pokemon);
  console.log(pokemonDataArray);

  //- useParams
  const idParams = useParams();

  const detailPokemon = pokemonDataArray.filter((elm) => {
    return elm.id.toString() === idParams.id;
  });

  console.log(detailPokemon);

  //------------

  return (
    <section className="detail-page">
      <img className="pokemonlogo" src="../../pokemon-img.png" alt="Logo" />
      <Link to={`/`}>← show all</Link>
      <div className={`${theme ? "darkcard" : "card"}`}>
        <img
          className="super-pokemon"
          src={detailPokemon[0].sprites.other.home.front_default}
          alt="Pokemon"
        />
      </div>
      <h1>
        #{detailPokemon[0].id.toString().padStart(3, "0")}{" "}
        {detailPokemon[0].name}
      </h1>
      {detailPokemon[0].types.map((type) => {
        return <TypeButtons key={crypto.randomUUID()} type={type.type.name} />;
      })}
      <h3>Attacken:</h3>
      <p>{detailPokemon[0].moves[0].move.name}</p>
      <p>{detailPokemon[0].moves[1].move.name}</p>
      <p>{detailPokemon[0].moves[3].move.name}</p>
    </section>
  );
}
