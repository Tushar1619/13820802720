// src/App.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Hero = () => {
  const [allTrains, setAllTrains] = useState([]);
  const [singleTrain, setSingleTrain] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTrainsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/allTrains');
        setAllTrains(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching all trains data:', error);
        setLoading(false);
      }
    };

    fetchAllTrainsData();
  }, []);

  const fetchSingleTrainData = async (trainId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/train/${trainId}`);
      setSingleTrain(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching single train data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display all trains schedule */}
      <h2>All Trains Schedule</h2>
      <ul>
        {allTrains.map((train) => (
          <li key={train.id}>
            Train Name: {train.name}, Departure Time: {train.departureTime}
          </li>
        ))}
      </ul>

      {/* Display a single train schedule */}
      <h2>Single Train Schedule</h2>
      <button onClick={() => fetchSingleTrainData('train123')}>Fetch Train Data</button>
      {singleTrain.name && (
        <div>
          Train Name: {singleTrain.name}, Departure Time: {singleTrain.departureTime}
        </div>
      )}
    </div>
  );
};

export default Hero;
