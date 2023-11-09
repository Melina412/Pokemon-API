import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Page & Componets
import Home from "./page/Home";
import DetailsPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";
import FetchData from "./components/FetchData";

import { useState } from "react";
import "./App.css";
// Import Context
import { ThemeContext } from "./Context/context";
import { FetchContext } from "./Context/context";
import PokemonList from "./components/PokemonList";

function App() {
  const [theme, setTheme] = useState(false);
  const [pokemonList, setPokemonList] = useState();
  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  return (
    <section>
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/pokemon-list" element={<PokemonList />} />
            </Routes>
          </BrowserRouter>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
