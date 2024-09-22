import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { FiveDays } from './FiveDays';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;

  return (
    <div>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5">{weatherData.city.name}</Typography>
          <img src={iconUrl} alt="Weather Icon" style={{ width: 120, height: 120 }} />
          <Typography variant="h6">{weatherData.list[0].main.temp.toFixed(1)}°C</Typography>
          <Typography variant="h6">Sensación térmica: {weatherData.list[0].main.feels_like.toFixed(1)}°C</Typography>
          <Typography variant="body2">Humedad: {weatherData.list[0].main.humidity} %</Typography>
          <Typography variant="body2">Presión: {weatherData.list[0].main.pressure} hPa</Typography>
          <Typography variant="body2">Tipo de clima: {weatherData.list[0].weather[0].description}</Typography>
        </CardContent>
      </Card>

      <FiveDays />
    </div>
  );
};

export default WeatherCard;
