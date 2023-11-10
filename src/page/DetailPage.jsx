// Styling
import style from './Detailpage.module.css';

import { useContext } from 'react';
import { FetchContext } from '../Context/context';
import { useParams, Link } from 'react-router-dom';
import TypeButtons from '../components/searchpage/TypeButtons';

export default function DetailPage() {
  const { pokemonDataArray } = useContext(FetchContext);
  //- useParams
  const idParams = useParams();

  const detailPokemon =
    pokemonDataArray &&
    pokemonDataArray.filter((elm) => {
      return elm.id.toString() === idParams.id;
    });

  return (
    <section className={`${style.page}`}>
      <img className={`${style.logo}`} src="../../pokemon-img.png" alt="Logo" />
      <Link to={`/`}>← show all</Link>
      <div className={`${style.card}`}>
        <img
          className={`${style.pokemon}`}
          src={detailPokemon[0].sprites.other.home.front_default}
          alt="Pokemon"
        />
      </div>
      <h1>
        #{detailPokemon[0].id.toString().padStart(3, '0')} {detailPokemon[0].name}
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
