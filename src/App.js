
import './App.scss';

import { useState } from 'react';
import locations from './Data/locations';
import CurrentWeather from './Components/currentweather';
import SelectedCity from './Components/SelectedCity';


function App() {

const [selectedCity, setSelectedCity] = useState(null)


  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="locationContainer">
      {locations.map((location, i) =>{
        return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity}/>
      })}
      </div>
      {selectedCity && <SelectedCity location={selectedCity} />}

    </div>
  );
}

export default App;
