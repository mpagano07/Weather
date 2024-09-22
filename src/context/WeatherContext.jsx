import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const addToHistory = ({ city }) => {
    setSearchHistory((prev) => {
      const newHistory = [{ city }, ...prev.filter((c) => c.city !== city)].slice(0, 5);
      return newHistory;
    });
  };

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, searchHistory, addToHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};
