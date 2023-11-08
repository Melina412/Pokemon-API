import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './page/SearchPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
