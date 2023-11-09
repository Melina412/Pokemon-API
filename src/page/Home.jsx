import { useContext } from "react";
import { FetchContext } from "../Context/context";
import { ThemeContext } from "../Context/context";
import style from "./Home.module.css";

import PokemonList from "../components/PokemonList";

/* IMAGES */
import pokemonLogo from "../assets/images/pokemon-logo.png";
import SearchBox from "../components/SearchBox";

const Home = ({ setFilteredPokemon, filteredPokemon }) => {
  const { pokemonList } = useContext(FetchContext);
  const { theme } = useContext(ThemeContext);
  console.log("Fetch Data", pokemon);
  return (
    <section className={`${style.container} ${theme ? style.dark : null}`}>
      <header>
        <img src={pokemonLogo} alt="PokemonLogo" className="logo" />
        <SearchBox setFilteredPokemon={setFilteredPokemon} />
      </header>
      <main>
        <PokemonList filteredPokemonList={filteredPokemon} />
      </main>
    </section>
  );
};

export default Home;
