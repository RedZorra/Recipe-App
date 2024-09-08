import {useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function DarkModeToggle() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    function onChange(event) {
        toggleTheme(event.target.checked);
    }

    return (
        <div className="dark-mode-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={onChange} />
          <span className="slider round"></span>
        </label>
        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div> 
    );
}

export default DarkModeToggle;