
import './App.scss';

import { useState } from 'react';
import locations from './Data/locations';
import CurrentWeather from './Components/currentweather';
import SelectedCity from './Components/SelectedCity';
import Credits from'./Components/Credits'


function App() {

const [selectedCity, setSelectedCity] = useState(null)
const [displayCredits, setDisplayCredits] = useState(false)


  return (
    <div className="App">
      {(selectedCity && !displayCredits) &&<img className="App_img" src={require(`./img/Backgrounds/${selectedCity.backgroundImg.type.img}`)} />


      }
      <h1 id="top">Weather App</h1>
      {displayCredits ?

    
    <div className="App_creditsbutton" onClick={() => setDisplayCredits(false)}>Back</div>

    :

        <div className="App_creditsbutton" onClick={() => setDisplayCredits(true)}>Credits</div>
      }
      
  {displayCredits ?
    <Credits />

  :
     <>
      <div className="locationContainer">
      {locations.map((location, i) =>{
      return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
      })}
      </div>
      {selectedCity && <SelectedCity location={selectedCity} />}
    </>
 } 

    </div>
  );
}

export default App;
