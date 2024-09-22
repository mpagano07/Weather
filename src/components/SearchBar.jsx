import { useContext, useState } from 'react';
import { Autocomplete, TextField,Typography } from '@mui/material';
import { WeatherContext } from '../context/WeatherContext';
import { useWeather } from '../hooks/useWeather';
import { countries } from './countries.data';

const SearchBar = () => {
  const { fetchWeather, error } = useWeather();
  const { searchHistory } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (event, newValue) => {
    if (newValue) {
      fetchWeather(newValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        options={searchHistory.map(({ city }) => city)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={handleSearch}
        renderInput={(params) => <TextField {...params} label="Buscar Ciudad o País" />}
      />
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default SearchBar;
