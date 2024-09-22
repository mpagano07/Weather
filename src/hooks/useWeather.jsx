import { useContext, useState, useMemo } from 'react';
import axios from 'axios';
import { WeatherContext } from '../context/WeatherContext';

const API_KEY = 'edd16ce1b37024c4671ca2ae7e3b80b0';

export const useWeather = () => {
  const { setWeatherData, addToHistory } = useContext(WeatherContext);
  const [error, setError] = useState(null);

  const fetchWeather = useMemo(() => {
    return async (city) => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=es&units=metric`);
        const weatherData = response.data;

        setWeatherData(weatherData);
        addToHistory({ city });
        setError(null);
      } catch (err) {
        setError('Verifica el nombre de la ciudad.');
      }
    };
  }, []);

  return { fetchWeather, error };
}