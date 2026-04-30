const express = require('express');
const cors = require('cors');
const promMiddleware = require('express-prometheus-middleware');
require('dotenv').config();

const weatherRoute = require('./routes/weather');

const app = express();
app.use(cors());
app.use(express.json());

app.use(promMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
}));

app.use('/api/weather', weatherRoute);

app.get('/health', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

