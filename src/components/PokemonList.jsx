import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../Context/context";
import PokemonDetails from "./PokemonDetails";

// ich habe die gesamten Daten von der API hier noch mal gefetcht und verarbeitet,
// weil ich für die Liste die Detail-Daten der einzelnen Pokemon in einem Array brauche
// und sonst nicht sehen konnte, ob meine code funktioniert

// todo : beim reload wird der fetch erneut ausgeführt und die daten sind dann mehrfach im pokemonDataArray
// todo : wie viele pokemon wollen wir in der Liste anzeigen?
// todo : ggf. button für das laden weiterer pokemon?
// todo : style
// todo : pokemon müssen noch nach id sortiert werden

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState();
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  //   const { pokemon, setPokemon } = useContext(FetchContext);

  const fetchList = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    // * zuerst die ganze liste mit den pokemon fetchen
    fetch(fetchList)
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.results.map((pokemon) => {
          // * dann nochmal für jedes pokemon die jeweilige detail-api fetchen & daten in array mappen
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              console.log({ pokemonData });
              setPokemonDataArray((prev) => [...prev, pokemonData]);
            });
        });

        // * warten bis alle daten da sind und dann anzeigen
        Promise.all(fetchedData).then(() => {
          setPokemonList(data);
          console.log({ data });
          console.log({ pokemonDataArray });
        });
      })

      .catch((error) =>
        console.error("Fehler beim Abrufen der Pokemon-Liste:" + error)
      );
  }, []);
  console.log({ pokemonList });

  return (
    <section>
      <h2>Pokemon List</h2>
      {pokemonDataArray?.map((item, index) => (
        <PokemonDetails key={index} pokemon={item} />
      ))}
    </section>
  );
};

export default PokemonList;
