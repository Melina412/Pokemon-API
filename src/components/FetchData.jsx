import { useContext } from 'react';
import { FetchContext } from '../Context/context';
import { useEffectOnce } from '../utils/useEffectOnce';
const FetchData = () => {
  const { setPokemonDataArray } = useContext(FetchContext);
  // const fetchList = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  const fetchList = 'https://pokeapi.co/api/v2/pokemon?limit=1292&offset=0';

  useEffectOnce(() => {
    // * zuerst die ganze liste mit den pokemon fetchen

    fetch(fetchList)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((pokemon) => {
          // * dann nochmal für jedes pokemon die jeweilige detail-api fetchen & daten in array mappen
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              setPokemonDataArray((prev) => [...prev, pokemonData]);
            });
        });
      })

      .catch((error) => console.error('Fehler beim Abrufen der Pokemon-Liste:' + error));
  }, []);
};

export default FetchData;
