
import './App.scss';

import { useState } from 'react';
import locations from './data/locations';
import CurrentWeather from './components/currentweather';
import SelectedCity from './components/SelectedCity';


function App() {

const [selectedCity, setSelectedCity] = useState(null)


  return (
    <div className="App">
      <h1>Weather App</h1>
      {locations.map((location, i) =>{
        return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity}/>
      })}
      {selectedCity && <SelectedCity location={selectedCity} />}

    </div>
  );
}

export default App;
