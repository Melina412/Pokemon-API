import PropTypes from 'prop-types';

import pokemonLogo from '../assets/images/pokemon-logo.png';

/* CSS */
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import TypeButtons from '../components/searchpage/TypeButtons';
import { useState } from 'react';

const SearchPage = ({ isDarkMode, onHandleSearchByType }) => {
  const [types, setTypes] = useState([]);

  const handleSetTypes = (type) => {
    if (types.indexOf(type) != -1) {
      setTypes((currentTypes) => currentTypes.filter((cur) => cur !== type));
    } else {
      setTypes((currentTypes) => [...currentTypes, type]);
    }

    console.log(types);
  };

  const typeNames = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'plant',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];

  return (
    <>
      <header
        className={`${styles.header} ${!isDarkMode ? styles.light_body_bg : styles.dark_body_bg}`}
      >
        <div>
          <img src={pokemonLogo} alt="PokemonLogo" />
          <Link to="/">
            <svg
              width="50"
              height="50"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="close">
                <path
                  id="Vector"
                  d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>
      </header>
      <main
        className={`${styles.main} ${!isDarkMode ? styles.light_body_bg : styles.dark_body_bg}`}
      >
        <section className={styles.section}>
          <article className={styles.buttons}>
            {typeNames.map((type) => {
              return (
                <TypeButtons
                  key={crypto.randomUUID()}
                  type={type}
                  onHandleSetTypes={handleSetTypes}
                />
              );
            })}
          </article>
          <article>
            <button onClick={() => onHandleSearchByType(types)} className={styles.search_button}>
              SEARCH
            </button>
          </article>
        </section>
      </main>
    </>
  );
};

SearchPage.propTypes = {
  isDarkMode: PropTypes.bool,
  onHandleSearchByType: PropTypes.func,
};

export default SearchPage;
