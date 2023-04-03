import { useState } from 'react';
import locations from '../Data/locations';
import CurrentWeather from './currentweather';
import SelectedCity from './SelectedCity';



const Main = () => {

    const [selectedCity, setSelectedCity] = useState(null)
    return (
        <div className="App">
          <h1 id="top">Weather App</h1>
          <div className="locationContainer">
          {locations.map((location, i) =>{
          return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
          })}
          </div>
          {selectedCity && <SelectedCity location={selectedCity} />}
    
        </div>
      );
}

export default Main

