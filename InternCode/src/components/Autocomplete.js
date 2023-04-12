import React, { useState } from 'react';
import axios from 'axios';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=fe79cd45a8884fe38483b89cc613a8af&limit=5`
      );
      const results = response.data.results;
      const addresses = results.map((result) => result.formatted);
      setSuggestions(addresses);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (address) => {
    setInputValue(address);
    setSuggestions([]);
  };

  return (
    <div style={{width:'80%'}}>
      <input type="text" value={inputValue} onChange={handleChange}  className='edLocation' placeholder = "Enter Your Location"/>
      <ul className='SuggestList-container'>
        {suggestions.map((address, index) => (
          <li key={index} onClick={() => handleSelect(address)} className="SuggestList">
            {address}
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
