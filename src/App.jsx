import { useState, useEffect } from 'react'
import './App.css'
import Descriptions from './components/Descriptions/Descriptions'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback';

function App() {
  const [good, setGood] = useState(() => {
    const saved = localStorage.getItem('good')
    return saved !== null ? JSON.parse(saved) : 0;
  });
  const [neutral, setNeutral] = useState(() => {
    const saved = localStorage.getItem('neutral')
    return saved !== null ? JSON.parse(saved) : 0;
  });
  const [bad, setBad] = useState(() => {
    const saved = localStorage.getItem('bad')
    return saved !== null ? JSON.parse(saved) : 0;
  })

  useEffect(() => {
    localStorage.setItem('good', JSON.stringify(good))
  }, [good])

  useEffect(() => {
    localStorage.setItem('neutral', JSON.stringify(neutral))
  }, [neutral])

  useEffect(() => {
    localStorage.setItem('bad', JSON.stringify(bad))
  }, [bad])

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);
  const handleReset = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
  };

  return (
    <div>
      <Descriptions />
      <Options 
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
        onReset={handleReset}
      />
      <Feedback good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App
