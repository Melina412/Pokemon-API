import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Page & Componets
import Home from "./page/Home";
import DetailsPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";
import FetchData from "./components/FetchData";
import PokemonList from "./components/PokemonList";

import { useState } from "react";
import "./App.css";
// Import Context
import { ThemeContext } from "./Context/context";
import { FetchContext } from "./Context/context";

function App() {
  const [theme, setTheme] = useState(false);
  const [pokemonList, setPokemonList] = useState();
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  
  return (
    <section className="wrap">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ pokemon, setPokemon }}>
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
                <Route path="/details" element={<DetailsPage />} />
                <Route
                  path="/search"
                  element={<SearchPage filteredPokemon={setFilteredPokemon} />}
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
