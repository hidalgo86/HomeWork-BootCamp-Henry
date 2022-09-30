import React from 'react';

export default function Card({onClose, name, min, max, img}) {
  // acá va tu código
  return (
  <div>
    <button onClick={onClose}>x</button>
    <h3>{name}</h3>
    <div>
      <p>MIN</p>
      <p>{min}</p>
    </div>
    <div>
      <p>MAX</p>
      <p>{max}</p>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
  </div>
  )
};