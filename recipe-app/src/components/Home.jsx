import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { fetchAllRecipes, fetchCategories } from '../api.js';

function Home() {
    const [recipes, setRecipes] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { isDarkMode } = useContext(ThemeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [error, setError] = useState(null);

    const getRecipes = async (searchTerm = "") => {
        try {
            const fetchedRecipes = await fetchAllRecipes(searchTerm); 
            setRecipes(fetchedRecipes);
            setError(null); 
        } catch (error) {
            console.error('Fehler beim Abrufen der Rezepte:', error);
            setError('Fehler beim Laden der Rezepte. Bitte versuche es später erneut.');
        }
    };

    const getCategories = async () => {
        try {
            const fetchedCategories = await fetchCategories(); 
            setCategories(fetchedCategories);
        } catch (error) {
            console.error('getCategories:', error);
        }
    };


    useEffect(() => {
        getRecipes(); 
        getCategories(); 
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.strCategory === selectedCategory));
        }
    }, [recipes, selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className={`home ${isDarkMode ? 'dark' : ''}`}>
            <h1>Featured Recipes</h1>
            <label htmlFor="category-select">Choose a category:</label>
            <select id="category-select" onChange={handleCategoryChange}>
                <option value="All">All</option>
                {categories.map(category => (
                    <option key={category.idCategory} value={category.strCategory}>{category.strCategory}</option>
                ))}
            </select>
            
            {error && <p>{error}</p>} 
            <div className="recipes">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.idMeal} className="recipe">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <h3>{recipe.strMeal}</h3>
                            <Link className="link-design" to={`/meal/${recipe.idMeal}`}>View Recipe</Link>
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
}

export default Home;