import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  { ThemeContext } from '../context/ThemeContext';
import recipes from '../data/recipes';

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { isDarkMode } = useContext(ThemeContext);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const filteredRecipes = selectedCategory === 'All' ? recipes : recipes.filter(recipe => recipe.category === selectedCategory);

    return (
        <div className={`home ${isDarkMode ? 'dark' : ''}`}>
            <h1>Featured Recipes</h1>
            <label htmlFor="category-select">Choose a category:</label>
            <select id="category-select" onChange={handleCategoryChange}>
                <option value="All">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Main Dish">Main Dish</option>
                <option value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Side Dish">Side Dish</option>
                <option value="Dessert">Dessert</option>
            </select>
            <div className="recipes">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="recipe">
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;