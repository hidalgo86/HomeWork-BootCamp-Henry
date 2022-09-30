import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  return (

    <form className={styles.container} onSubmit={(e) => {
      e.preventDefault();
      const input = document.getElementById('cityInput');
      onSearch(input.value);
      input.value = '';
    }}>

    <input id='cityInput' className={styles.input} type="text" placeholder="   Ciudad..." />

    <input className={styles.agregar} type="submit" value="Agregar" />
    
    {/* <button className={styles.agregar} onClick={() => onSearch('Agregando ciudad...')}>Agregar</button> */}

    </form>
  )
};



      // <div className={styles.container}>
      //   <input className={styles.input} type="text" />
      //   <button className={styles.agregar} onClick={() => onSearch('Agregando ciudad...')}>Agregar</button>
      // </div>

// import React, { useState } from "react";

// export default function SearchBar({onSearch}) {
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch("Cairns");
//     }}>

//       <input
//         type="text"
//         placeholder="Ciudad..."
//       />
      
//       <input type="submit" value="Agregar" />

//     </form>
//   );
// }