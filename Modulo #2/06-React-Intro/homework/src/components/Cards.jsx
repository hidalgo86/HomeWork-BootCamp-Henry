import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>{
    //cities es un array [Cairns, Londres, Denver] = Cairns={}, Londres={}, Denver={}
    cities.map(ciudad=>
      <Card
      key={ciudad.id}
      max={ciudad.main.temp_max}
      min={ciudad.main.temp_min}
      name={ciudad.name}
      img={ciudad.weather[0].icon}
      onClose={() => alert(ciudad.name)}
      />     
      )
    }
  </div>
  )
};