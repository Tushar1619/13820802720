// src/components/SingleTrainSchedule.js
import React, { useState } from 'react';
import axios from 'axios';

const SingleTrainSchedule = () => {
  const [singleTrain, setSingleTrain] = useState({});
  const [loading, setLoading] = useState(false);
  const [trainId, setTrainId] = useState('');

  const fetchSingleTrainData = async () => {
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

  return (
    <div>
      <h2>Single Train Schedule</h2>
      <input
        type="text"
        value={trainId}
        onChange={(e) => setTrainId(e.target.value)}
        placeholder="Enter Train ID"
      />
      <button onClick={fetchSingleTrainData}>Fetch Train Data</button>
      {loading && <div>Loading...</div>}
      {singleTrain.name && (
        <div>
          Train Name: {singleTrain.name}, Departure Time: {singleTrain.departureTime}
        </div>
      )}
    </div>
  );
};

export default SingleTrainSchedule;
