import { useContext } from "react";
import { FetchContext } from "../Context/context";
import style from "./Home.module.css";

/* IMAGES */
import pokemonLogo from "../assets/images/pokemon-logo.png";

const Home = () => {
  const { pokemon } = useContext(FetchContext);
  console.log("Fetch Data", pokemon);
  return (
    <section className={style.container}>
      <header>
        <img src={pokemonLogo} alt="PokemonLogo" />
      </header>
    </section>
  );
};

export default Home;
