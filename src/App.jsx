import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import Page & Componets
import Home from './page/Home';
import DetailsPage from './page/DetailPage';
import SearchPage from './page/SearchPage';
import FetchData from './components/FetchData';

import { useState } from 'react';
import './App.css';
// Import Context
import { ThemeContext } from './Context/context';
import { FetchContext } from './Context/context';

function App() {
  const [theme, setTheme] = useState(false);
  const [pokemon, setPokemon] = useState();
  return (
    <section>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ pokemon, setPokemon }}>
          <BrowserRouter>
            <FetchData />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </BrowserRouter>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
