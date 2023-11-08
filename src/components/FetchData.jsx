import { useContext, useEffect, useState } from "react";
import { FetchContext } from "../Context/context";
const FetchData = () => {
  const { setPokemon } = useContext(FetchContext);
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) =>
        console.error("Fehler beim Abrufen der Daten: " + err.message)
      );
  }, []);
};

export default FetchData;
