import React from 'react';
import NavBar from './components/NavBar.jsx'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import data, { Cairns } from './data.js';
import  styles from './App.module.css';

export default function App() {

const [cities, setCities] = React.useState([]);

const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

function onSearch(ciudad) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=cumana&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };

        setCities(oldCities => {
            return [...oldCities, ciudad];
        });

      } else {
        alert("Ciudad no encontrada");
      }

    });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  

  return (
    <div className= {styles.app}>
    
      <div className={styles.header}>
        <NavBar
        onSearch={onSearch}
        />
      </div>

      <div className={cities.length === 0 ? '' : styles.card}>
        <Card
          name={cities.length === 0 ? '' : cities[cities.length-1].name}
          min={cities.length === 0 ? '' : cities[cities.length-1].min} 
          max={cities.length === 0 ? '' : cities[cities.length-1].max} 
          img={cities.length === 0 ? '' : cities[cities.length-1].img}
          card= {true}
          />
      </div>

      <div className={cities.length === 0 ? '' : styles.cards}>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      
    </div>
  );
}
