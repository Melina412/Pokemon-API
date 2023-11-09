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
      
      if (types && types.length > 0) {
           if (checked) {
             setFilteredPokemon(pokemonDataArray);
        types.forEach((typeName) => {
          setFilteredPokemon((prev) => [
            ...prev.filter((element) =>
              element.types.map((type) => type.type.name).includes(typeName)
            ),
          ]);
        });
               return;
      }
         const filteredResults = pokemonDataArray.filter(
        (element) =>
          element.types.filter(
            (e) => types.filter((type) => e.type.name.includes(type)).length > 0
          ).length > 0
      );
      setFilteredPokemon(filteredResults);
    }
  };

  return (
    <section className={`wrap ${theme ? "dark" : "light"}`}>
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
                    <SearchPage onHandleSearchByType={handleSearchByType} />
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
