import PropTypes from 'prop-types';

/* CSS */
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import TypeButtons from '../components/searchpage/TypeButtons';
import { useState } from 'react';
import SearchPageHeader from '../components/searchpage/SearchPageHeader';

const SearchPage = ({ isDarkMode, onHandleSearchByType }) => {
  const [types, setTypes] = useState([]);

  const handleSetTypes = (type) => {
    types.indexOf(type) != -1
      ? setTypes((currentTypes) => currentTypes.filter((cur) => cur !== type))
      : setTypes((currentTypes) => [...currentTypes, type]);
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
      <SearchPageHeader isDarkMode={isDarkMode} />
      <main
        className={`${styles.main} ${!isDarkMode ? styles.light_body_bg : styles.dark_body_bg}`}
      >
        <div className={styles.type}>
          <h2>TYPE</h2>
        </div>
        <section className={styles.section}>
          <article className={styles.buttons}>
            {typeNames.map((type) => {
              return (
                <TypeButtons
                  key={crypto.randomUUID()}
                  type={type}
                  onHandleSetTypes={handleSetTypes}
                  clickedTypes={types}
                />
              );
            })}
          </article>
          <article>
            <Link to={`${types.length > 0 ? '/' : '#'}`}>
              <button onClick={() => onHandleSearchByType(types)} className={styles.search_button}>
                SEARCH
              </button>
            </Link>
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
