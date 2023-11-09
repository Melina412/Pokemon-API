import { useState, useContext, useEffect } from "react";
import { FetchContext } from "../Context/context";
import { ThemeContext } from "../Context/context";

import menu from "../assets/images/menu.png";
import mode from "../assets/images/mode.png";
import style from "./SearchBox.module.css";
import { Link } from "react-router-dom";
const SearchBox = ({ setFilteredPokemon }) => {
  const [searchText, setSearchText] = useState("");
  const { pokemonList } = useContext(FetchContext);
  const { pokemonDataArray } = useContext(FetchContext);
  const { setTheme } = useContext(ThemeContext);
  console.log("pokemonDataArray", pokemonDataArray);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  useEffect(() => {
    const filteredResult = pokemonDataArray?.filter((item) =>
      item.name.includes(searchText.toLowerCase())
    );
    setFilteredPokemon(filteredResult);
    console.log("Filter Result ===>>>>", filteredResult);
  }, [searchText]);

  return (
    <section className={style.searchBox}>
      <Link to="/search">
        <img src={menu} alt="Hamburgermenu" />
      </Link>

      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <img src={mode} alt="Darkmode" onClick={toggleTheme} />
    </section>
  );
};

export default SearchBox;
