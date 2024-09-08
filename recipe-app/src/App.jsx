import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import Search from './components/Search';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search/" element={<SearchBar />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;