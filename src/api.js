const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchAllRecipes = async () => {
    try {
        const response = await fetch(`${API_URL}/search.php?s=`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals; 
    } catch (error) {
        console.error('fetchRecipes error: ', error);
        throw error;
    }
};

export const fetchRecipesDetails = async (id) => {
    try {
        const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals; 
    } catch (error) {
        console.error('fetchRecipes error: ', error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.categories; 
    } catch (error) {
        console.error('fetchCategories error: ', error);
        throw error;
    }
};