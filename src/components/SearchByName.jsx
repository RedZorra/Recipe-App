import {useState } from 'react';
import { Link } from 'react-router-dom';

function SearchByName() {
    const [query , setQuery] = useState('');
    const [meals, setMeals] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!query) {
            setErrorMessage('Please enter a meal name');
            return;
        }
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();
            setMeals(data.meals || []);
            if (!data.meals) {
                setErrorMessage('No results found. Please try another search.');
            }
        } catch (error) {
            console.error('handleSearch error: ', error);
            setErrorMessage('There was an error. Please try again later.');
        }
    };
  // <button onClick={getRandomRecipe} className="surprise-me-button">Surprise Me!</button>
    return(
        <div>
            <form className='search-form' onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for a meal..." 
                />
                <button className='search-button' type="submit">Search</button>
            </form>
            <div className='search-results'>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {meals.length > 0 ? (
                    meals.map(meal => (
                        <div className='recipe-detail' key={meal.idMeal}>
                            <div className='recipe-card'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <h3>{meal.strMeal}</h3>
                                <Link className='link-design' to={`/meal/${meal.idMeal}`}>View Recipe</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    !errorMessage && <p>Search for a meal...</p>
                )}
            </div>
        </div>
    );
}

export default SearchByName;