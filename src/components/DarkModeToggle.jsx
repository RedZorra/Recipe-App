import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className="dark-mode-toggle">
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
            </label>
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div> 
    );
}

export default DarkModeToggle;