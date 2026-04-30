const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
    
    const response = await axios.get(url);
    const data = response.data;

    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      icon: data.weather[0].icon,
    });
  } catch (error) {
    res.status(404).json({ error: 'Ville non trouvée' });
  }
});

module.exports = router;
