import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MealDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    const getMealDetails = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setMeal(data.meals[0]);
        } catch (error) {
            console.error('Error fetching meal details:', error);
        }
    };

    useEffect(() => {
        getMealDetails();
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    return (
        <div className="recipe-detail">
            <div className="recipe-card">
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
        </div>
    );
}

export default MealDetails;