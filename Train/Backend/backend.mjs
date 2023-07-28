// index.js
import express from 'express';

const app = express();
const PORT = 5000; 


app.use(express.json());

const exampleAllTrainsData = [
  {
    id: 'train1',
    name: 'Express Train 1',
    departureTime: '09:00 AM',
    seatsAvailable: 120,
    prices: {
      sleeper: 50,
      ac: 100,
    },
  },
  {
    id: 'train2',
    name: 'Superfast Train 2',
    departureTime: '11:30 AM',
    seatsAvailable: 80,
    prices: {
      sleeper: 80,
      ac: 150,
    },
  },

];

async function fetchAllTrains() {
  
  return exampleAllTrainsData;
}


async function fetchSingleTrain(trainId) {
 
  const trainData = exampleAllTrainsData.find((train) => train.id === trainId);
  return trainData || {};
}

app.get('/api/allTrains', async (req, res) => {
  try {
    const trainsData = await fetchAllTrains();
    res.json(trainsData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/train/:trainId', async (req, res) => {
  try {
    const { trainId } = req.params;
    const trainData = await fetchSingleTrain(trainId);
    res.json(trainData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
