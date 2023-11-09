import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Page & Componets
import Home from './page/Home';

import DetailPage from './page/DetailPage';
import SearchPage from './page/SearchPage';
import FetchData from './components/FetchData';
import PokemonList from './components/PokemonList';

import { useState } from 'react';
import './App.css';
// Import Context
import { ThemeContext } from './Context/context';
import { FetchContext } from './Context/context';

function App() {
  const [theme, setTheme] = useState(false);
  const [pokemonList, setPokemonList] = useState();
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleSearchByType = (types, checked) => {
    if (checked) {
      setFilteredPokemon(pokemonDataArray);
      if (types && types.length > 0) {
        types.forEach((typeName) => {
          setFilteredPokemon((prev) => [
            ...prev.filter((element) =>
              element.types.map((type) => type.type.name).includes(typeName)
            ),
          ]);
        });
      }

      return;
    }
  };

  return (
    <section className="wrap">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider
          value={{
            pokemonList,
            setPokemonList,
            pokemonDataArray,
            setPokemonDataArray,
          }}
        >
          <BrowserRouter>
            <FetchData />
            {pokemonList ? (
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
                <Route path="/details/:id" element={<DetailPage />} />
                <Route
                  path="/search"
                  element={
                    <SearchPage
                      filteredPokemon={setFilteredPokemon}
                      onHandleSearchByType={handleSearchByType}
                    />
                  }
                />
              </Routes>
            ) : (
              <p>Loding...</p>
            )}
          </BrowserRouter>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
