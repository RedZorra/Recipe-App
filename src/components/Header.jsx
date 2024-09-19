import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const getRandomRecipe = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.meals) {
        // Navigiere zur Detailseite des zufälligen Rezepts
        navigate(`/meal/${data.meals[0].idMeal}`);
      }
    } catch (error) {
      console.error('Fehler beim Abrufen eines zufälligen Rezepts:', error);
    }
  };

    return(
    <>
        <nav className="container container-nav">
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
    </>
    )
}

export default Header;

