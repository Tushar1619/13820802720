const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8008;

const fetchDataFromUrl = async (url) => {
  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    return [];
  }
};

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'Missing "url" query, please add the query parameter' });
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];
  const promises = urlArray.map((url) => fetchDataFromUrl(url));

  try {
    const responses = await Promise.all(promises);
    const allNumbers = responses.reduce((acc, numbers) => acc.concat(numbers), []);
    const uniqueSortedNumbers = [...new Set(allNumbers)].sort((a, b) => a - b);

    res.json({ numbers: uniqueSortedNumbers });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
