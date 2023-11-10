import PropTypes from "prop-types";

import { useContext } from "react";
import { ThemeContext } from "../Context/context";
import style from "./Home.module.css";

import PokemonList from "../components/PokemonList";

/* IMAGES */
import pokemonLogo from "../assets/images/pokemon-logo.png";
import SearchBox from "../components/SearchBox";

const Home = ({ setFilteredPokemon, filteredPokemon }) => {
  const { theme } = useContext(ThemeContext);
  console.log({ filteredPokemon });
  return (
    <section className={style.container}>
      <header className="header">
        <img src={pokemonLogo} alt="PokemonLogo" className={style.logo} />
        <SearchBox setFilteredPokemon={setFilteredPokemon} />
      </header>
      <main>
        <PokemonList
          filteredPokemonList={filteredPokemon}
          setFilteredPokemon={setFilteredPokemon}
        />
      </main>
    </section>
  );
};

Home.propTypes = {
  setFilteredPokemon: PropTypes.func,
  filteredPokemon: PropTypes.array,
};

export default Home;
