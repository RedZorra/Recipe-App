import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MealDetails from './components/MealDetails';
import SearchByName from './components/SearchByName';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const getRandomRecipe = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.meals) {
        // Navigiere zur Detailseite des zufälligen Rezepts
        window.location.href = `/meal/${data.meals[0].idMeal}`;
      }
    } catch (error) {
      console.error('Fehler beim Abrufen eines zufälligen Rezepts:', error);
    }
  };

  return (
    <ThemeProvider>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search Meals</Link>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>

      <button onClick={getRandomRecipe} className="surprise-me-button">Surprise Me!</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/search" element={<SearchByName />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;