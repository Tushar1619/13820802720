import React, { useState } from 'react';
import Hero from './Components/Hero';
import AllTrainsSchedule from './Components/AllTrains';
import SingleTrainSchedule from './Components/SingleTrain';
function App() {
  const [showAllTrains, setShowAllTrains] = useState(true);
  return (
    <>
      <div>
        <Hero />
        <div>
          <button onClick={() => setShowAllTrains(true)}>Get All Trains</button>
          <button onClick={() => setShowAllTrains(false)}>Get Single Train</button>
        </div>
        {showAllTrains ? <AllTrainsSchedule /> : <SingleTrainSchedule />}
      </div>
    </>
  )
}

export default App
