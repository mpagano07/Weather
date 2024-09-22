import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Switch, FormControlLabel } from '@mui/material';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherProvider>
        <Container className="container" maxWidth={false}>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Tema"
          />
          <SearchBar />
          <WeatherCard />
        </Container>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
