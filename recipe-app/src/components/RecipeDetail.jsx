import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import recipes from '../data/recipes';

function RecipeDetail() {
    const { isDarkMode } = useContext(ThemeContext);
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    if (!recipe) {
        return <h1>Recipe not found!</h1>;
    }

    return (
        <div className={`recipe-detail ${isDarkMode ? 'dark' : ''}`}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.ingredients}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default RecipeDetail;