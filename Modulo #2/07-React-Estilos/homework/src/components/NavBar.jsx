import React from 'react';
import SearchBar from './SearchBar';
import styles from './NavBar.module.css'

export default function NavBar ({onSearch}) {
    return (
    <nav className="navbar bg-light">
        
        <div className="container-fluid">
            
            <img  src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/HENRY/original.PNG?1627058942" className={styles.imagen} alt="" />
            
            <SearchBar 
                onSearch={onSearch}
            />

        </div>
    </nav>
    )
}