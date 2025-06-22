const express = require('express');
const axios = require('axios');
var secretConfig = require('./secret-config.json');
const app = express();

app.use(express.static('public'));

app.get('/news/us', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + secretConfig.API_KEY);
  res.json(response.data.articles);
});

app.get('/news/pt', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=pt&apiKey=' + secretConfig.API_KEY);
  res.json(response.data.articles);
});

app.get('/news/tech', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=' + secretConfig.API_KEY);
  res.json(response.data.articles);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
