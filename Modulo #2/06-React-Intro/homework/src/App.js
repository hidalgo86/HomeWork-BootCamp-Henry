import React from 'react';
import data, { Cairns } from './data.js';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Card
          name={Cairns.name}
          min={Cairns.main.temp_min}
          max={Cairns.main.temp_max}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
          />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
