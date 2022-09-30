import React from 'react';
// import cities from '../data';
import styles from './Card.module.css';

export default function Card({onClose, name, min, max, img, card}) {
  
  return (
    <div className={card ? styles.containerCard : styles.container}>
      
      <button className={styles.boton} onClick={onClose}>
        x
      </button>
      
      <h3 className={styles.ciudad}>
        {name}
      </h3>
      
      <div className={styles.min}>
        <p>{min === '' ? '' : 'MIN'}</p>
        <p>{min}</p>
      </div>

      <div className={styles.max}>
        <p>{max === '' ? '' : 'MAX'}</p>
        <p>{max}</p>
      </div>

      <div className={styles.img}>
        {min && <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />}
      </div>

    </div>
  )
};


