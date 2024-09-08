import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault
        if(searchTerm.trim() !== '') {
        navigate(`/search/${searchTerm}`);
        }
    }

    return (
      <form onSubmit={handleSubmit} className="search-form">
      <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
      />
      <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
      </button>
      </form> 
    );
}

export default SearchBar;