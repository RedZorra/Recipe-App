import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MealDetails from './components/MealDetails';
import SearchByName from './components/SearchByName';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import './App.css';


function App() {
  

  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/search" element={<SearchByName />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;