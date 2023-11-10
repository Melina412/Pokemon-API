// Styling
import './Detailpage.css';

import { useContext} from "react";
import { FetchContext, ThemeContext } from "../Context/context";
import { useParams, Link } from "react-router-dom";
import TypeButtons from "../components/searchpage/TypeButtons";

export default function DetailPage() {
  const { pokemonDataArray } = useContext(FetchContext);
  const { theme } = useContext(ThemeContext);

  //- useParams
  const idParams = useParams();

  const detailPokemon =
    pokemonDataArray &&
    pokemonDataArray.filter((elm) => {
      return elm.id.toString() === idParams.id;
    });

  return (
    <section className="detail-page">
      <img className="pokemonlogo" src="../../pokemon-img.png" alt="Logo" />
      <Link to={`/`}>← show all</Link>
      <div className={`${theme ? 'darkcard' : 'card'}`}>
        <img
          className="super-pokemon"
          src={
            detailPokemon[0].sprites.other.home.front_default
              ? detailPokemon[0].sprites.other.home.front_default
              : detailPokemon[0].sprites.other["official-artwork"].front_default
          }
          alt="Pokemon"
        />
      </div>
      <h1>
        #{detailPokemon[0].id.toString().padStart(3, "0")}{" "}
        {detailPokemon[0].name.charAt(0).toUpperCase() +
          detailPokemon[0].name.slice(1)}
      </h1>
      {detailPokemon[0].types.map((type) => {
        return <TypeButtons key={crypto.randomUUID()} type={type.type.name} />;
      })}
      <h3>Attacken:</h3>
      {detailPokemon[0].moves.slice(0, 5).map((attack) => {
        return <p key={crypto.randomUUID()}>{attack.move.name}</p>;
      })}
    </section>
  );
}
