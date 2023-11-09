import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../Context/context";
const FetchData = () => {
  const { pokemonList, setPokemonList, pokemonDataArray, setPokemonDataArray } =
    useContext(FetchContext);
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
};

export default FetchData;
