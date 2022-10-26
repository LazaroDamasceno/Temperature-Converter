import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const CtoF = (temperature) => {
  return (parseFloat(temperature)*1.8 + 32).toFixed(2) + ' Fº';
}

const FtoC = (temperature) => {
  return ((parseFloat(temperature) - 32) / 1.8).toFixed(2) + ' Cº';
}

const Answer = (temperature, initialTemp, convTemp) => {
  if (initialTemp === 'C' || initialTemp === 'c') {
    if (convTemp === 'F' || convTemp === 'f') {
      return CtoF(temperature);
    }
  } else {
    return FtoC(temperature);
  }
}

function App() {
  let [temperature, setTemperature] = useState(0);
  let [initialTemp, setInitialTemp] = useState('');
  let [convTemp, setConvTemp] = useState('');

  useEffect(() => {
    if (initialTemp === convTemp) {
      alert("The type of the given temperatures must be different from each other.")
    }
  }, [initialTemp, convTemp])

  return (
    <div className="App">
      <form>
        <label>Temperature: </label>
        <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)}></input>
        <br></br>
        <br></br>
        <label>Initial Temperature Type: </label>
        <input type="text" value={initialTemp} onChange={(e) => setInitialTemp(e.target.value)}></input>
        <br></br>
        <br></br>
        <label>New Temperature Type: </label>
        <input type="text" value={convTemp} onChange={(e) => setConvTemp(e.target.value)}></input>
      </form>
      <h2 className='ans'>{Answer(temperature, initialTemp, convTemp)}</h2>
    </div>
  );
}

export default App;
