import { useContext, useEffect, useState } from "react";
import { FetchContext, ThemeContext } from "../Context/context";
import PokemonDetails from "./PokemonDetails";
import styles from "./PokemonList.module.css";

// todo : beim reload wird der fetch erneut ausgeführt und die daten sind dann mehrfach im pokemonDataArray
// todo : wie viele pokemon wollen wir in der Liste anzeigen?
// todo : ggf. button für das laden weiterer pokemon?
// todo : style
// todo : pokemon müssen noch nach id sortiert werden

const PokemonList = () => {
  const { pokemonList, setPokemonList, pokemonDataArray, setPokemonDataArray } =
    useContext(FetchContext);
  console.log({ pokemonDataArray });
  return (
    <section className={`${styles.section}`}>
      {pokemonDataArray?.map((item, index) => (
        <PokemonDetails key={index} pokemon={item} />
      ))}
    </section>
  );
};

export default PokemonList;
