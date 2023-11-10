import PropTypes from "prop-types";

import { useContext } from "react";
import { FetchContext } from "../Context/context";
import { ThemeContext } from "../Context/context";

import menu from "../assets/images/menu.png";
import mode from "../assets/images/mode.png";
import style from "./SearchBox.module.css";
import { Link } from "react-router-dom";

import { setInputVal, getInputVal } from "../utils/inputValue";

const SearchBox = ({ setFilteredPokemon }) => {
  const { pokemonDataArray } = useContext(FetchContext);

  const { setTheme } = useContext(ThemeContext);

  const searchPokemonByInput = (input) => {
    setInputVal(input);

    if (input !== "") {
      const filteredResult = pokemonDataArray?.filter((item) =>
        item.name.startsWith(input.toLowerCase())
      );
      if (filteredResult.length < 1) {
        setFilteredPokemon([null]);
        return;
      }
      setFilteredPokemon(filteredResult);
      return;
    }

    setFilteredPokemon(pokemonDataArray);
  };

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <section className={style.searchBox}>
      <Link to="/search">
        <img src={menu} alt="Hamburgermenu" />
      </Link>

      <input
        type="text"
        onChange={(e) => {
          searchPokemonByInput(e.target.value);
        }}
        value={getInputVal()}
        className={style.input}
        placeholder="Search Pokemon"
      />
      <img
        src={mode}
        alt="Darkmode"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />
    </section>
  );
};

SearchBox.propTypes = {
  setFilteredPokemon: PropTypes.func,
};

export default SearchBox;
