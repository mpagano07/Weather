import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Card, CardContent, Typography, Box } from "@mui/material";

export const FiveDays = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  const dailyForecast = weatherData.list.filter(item => item.dt_txt.includes("12:00:00"));

  //console.log('dailyForecast', dailyForecast)

  return (
    <div>
      <Typography variant="h6">Próximos 5 días</Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {dailyForecast.slice(0, 5).map((forecast, index) => {
          const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

          return (
            <Card key={index} sx={{ width: '18%', marginBottom: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <img src={iconUrl} alt="Weather Icon" style={{ width: 80, height: 80 }} />
                <Typography variant="body1">{forecast.dt_txt.split(' ')[0]}</Typography>
                <Typography variant="h6">Max:{forecast.main.temp_max.toFixed(1)}°C</Typography>
                <Typography variant="h6">Min:{forecast.main.temp_min.toFixed(1)}°C</Typography>
                <Typography variant="body2">{forecast.weather[0].description}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};
