// Styling
import './Detailpage.css';

import { useContext } from 'react';
import { FetchContext, ThemeContext } from '../Context/context';
import { useParams, Link } from 'react-router-dom';
import TypeButtons from '../components/searchpage/TypeButtons';

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
    </section>
  );
}
