import { useState, useContext, useEffect } from 'react';
import { FetchContext } from '../Context/context';
import { ThemeContext } from '../Context/context';

import menu from '../assets/images/menu.png';
import mode from '../assets/images/mode.png';
import style from './SearchBox.module.css';
import { Link } from 'react-router-dom';

const SearchBox = ({ setFilteredPokemon }) => {

  const [searchText, setSearchText] = useState("");
  const { pokemonList } = useContext(FetchContext);

  const { setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };


  useEffect(() => {

    const filterdResult = pokemonList?.results.filter((prev) =>
      prev.name.includes(searchText.toLowerCase())
    );
    setFilteredPokemon(filterdResult);
    console.log(filterdResult);
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
