import './App.css';
import yellowOtterImg from './images/yellow otter.png';
import blueOtterImg from './images/blue otter.png';
import React from 'react';
import Otter from './components/Otter';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className="container">
      <div>
        <Otter name="Otter" imageSrc={yellowOtterImg} color="yellow" />
        <Otter name="Otter" imageSrc={blueOtterImg} color="blue" />

        <Jokes />
      </div>
    </div>
  );
}

export default App;