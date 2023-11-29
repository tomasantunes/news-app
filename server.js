const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/news/us', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=XXXXXXXX');
  res.json(response.data.articles);
});

app.get('/news/pt', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=pt&apiKey=XXXXXXXX');
  res.json(response.data.articles);
});

app.get('/news/tech', async (req, res) => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=XXXXXXXX');
  res.json(response.data.articles);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
