import PropTypes from "prop-types";

/* CSS */
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import TypeButtons from "../components/searchpage/TypeButtons";
import { useState } from "react";
import SearchPageHeader from "../components/searchpage/SearchPageHeader";

const errorTimeLength = 5000;

const SearchPage = ({ onHandleSearchByType }) => {
  const [types, setTypes] = useState([]);
  const [errorHandler, setErrorHandler] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSetErrorHandler = () => {
    if (errorHandler) {
      return;
    }

    setErrorHandler(true);
    setTimeout(() => {
      setErrorHandler(false);
    }, errorTimeLength);
  };

  const handleSetTypes = (type) => {
    types.indexOf(type) != -1
      ? setTypes((currentTypes) => currentTypes.filter((cur) => cur !== type))
      : setTypes((currentTypes) => [...currentTypes, type]);
  };

  const typeNames = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "plant",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <div className={styles.body_section}>
      <SearchPageHeader />
      <main className={styles.main}>
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
          <article className={styles.tooltip_article}>
            {errorHandler && (
              <span className={styles.tooltip}>Please choose a type</span>
            )}
            <Link to={`${types.length > 0 ? "/" : "#"}`}>
              <button
                onClick={() =>
                  types.length > 0
                    ? onHandleSearchByType(types, checked)
                    : handleSetErrorHandler()
                }
                className={styles.search_button}
              >
                SEARCH
              </button>
            </Link>
            <div className={styles.checkbox_div}>
              <input type="checkbox" id="check" className={styles.checkbox} />
              <label htmlFor="check" onClick={() => setChecked(!checked)}>
                find only Pokemons with all Types
              </label>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

SearchPage.propTypes = {
  isDarkMode: PropTypes.bool,
  onHandleSearchByType: PropTypes.func,
};

export default SearchPage;
