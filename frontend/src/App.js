import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/api/weather/${city}`);
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError('Ville non trouvée ❌');
        setWeather(null);
      }
    } catch (err) {
      setError('Erreur de connexion au serveur ❌');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>🌤️ Weather DevOps App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Entrez une ville..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather}>Rechercher</button>
      </div>
      {loading && <p>Chargement...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2>{weather.city}, {weather.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
          <p className="temp">{Math.round(weather.temperature)}°C</p>
          <p>{weather.description}</p>
          <p>Ressenti : {Math.round(weather.feels_like)}°C</p>
          <p>Humidité : {weather.humidity}%</p>
          <p>Vent : {weather.wind_speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
