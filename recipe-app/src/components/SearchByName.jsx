import {useState } from 'react';
import { Link } from 'react-router-dom';

function SearchByName() {
    const [query , setQuery] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error('handleSearch error: ', error);
        }
    };

    return(
        <div>
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for a meal..." 
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div>
                {meals.length > 0 ? (
                    meals.map(meal => (
                        <div className="recipe-detail" key={meal.idMeal}>
                            <div className="recipe-card">
                                <h3>{meal.strMeal}</h3>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <Link to={`/meal/${meal.idMeal}`}>Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No meals found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchByName;