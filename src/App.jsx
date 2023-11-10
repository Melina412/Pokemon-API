import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Page & Componets
import Home from './page/Home';

import DetailPage from './page/DetailPage';
import SearchPage from './page/SearchPage';
import FetchData from './components/FetchData';


import { useState } from 'react';
import './App.css';
// Import Context
import { ThemeContext } from './Context/context';
import { FetchContext } from './Context/context';
import { LoadingContext } from './Context/context';
import Loading from './page/Loading';

import { setInputVal } from './utils/inputValue';

function App() {
  const [theme, setTheme] = useState(false);
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchByType = (types, checked) => {

    setInputVal("");
    if (types && types.length > 0) {
      if (checked) {
        let filteredResults = [...pokemonDataArray];
        types.forEach((typeName) => {
          filteredResults = [
            ...filteredResults.filter((element) =>
              element.types.map((type) => type.type.name).includes(typeName)
            ),
          ];
        });

        if (filteredResults.length < 1) {
          setFilteredPokemon([null]);
          return;
        }

        setFilteredPokemon(filteredResults);

        return;
      }

      const filteredResults = pokemonDataArray.filter(
        (element) =>
          element.types.filter((e) => types.filter((type) => e.type.name.includes(type)).length > 0)
            .length > 0
      );
      if (filteredResults.length < 1) {
        setFilteredPokemon([null]);
        return;
      }
      setFilteredPokemon(filteredResults);
    }
  };

  return (
    <section className={`wrap ${theme ? 'dark' : 'light'}`} id="top">
      <LoadingContext.Provider value={{ setLoading }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <FetchContext.Provider
            value={{
              pokemonDataArray,
              setPokemonDataArray,
            }}
          >
            <BrowserRouter>
              <FetchData />
              {loading && pokemonDataArray ? (
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        setFilteredPokemon={setFilteredPokemon}
                        filteredPokemon={filteredPokemon}
                      />
                    }
                  />
                  <Route
                    path="/details/:id"
                    element={<DetailPage pokemonDataArray={pokemonDataArray} />}
                  />
                  <Route
                    path="/search"
                    element={<SearchPage onHandleSearchByType={handleSearchByType} />}
                  />
                </Routes>
              ) : (
                <Loading />
              )}
            </BrowserRouter>
          </FetchContext.Provider>
        </ThemeContext.Provider>
      </LoadingContext.Provider>
    </section>
  );
}

export default App;
