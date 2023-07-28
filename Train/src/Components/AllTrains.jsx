// src/components/AllTrainsSchedule.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllTrainsSchedule = () => {
  const [allTrains, setAllTrains] = useState([]);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Trains Schedule</h2>
      <ul>
        {allTrains.map((train) => (
          <li key={train.id}>
            Train Name: {train.name}, Departure Time: {train.departureTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsSchedule;
