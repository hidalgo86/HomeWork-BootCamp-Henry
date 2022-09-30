import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

export default function Cards({cities, onClose}) {
  return (
    <div className={styles.container}>{
      //cities es un array [Cairns, Londres, Denver] = Cairns={}, Londres={}, Denver={}
      cities.map(ciudad=>
        <Card
        key={ciudad.id}
        name={ciudad.name}
        min={ciudad.min}
        max={ciudad.max}
        img={ciudad.img}
        onClose={() => onClose(ciudad.id)}
        />     
      )
    }
    </div>
  )
};