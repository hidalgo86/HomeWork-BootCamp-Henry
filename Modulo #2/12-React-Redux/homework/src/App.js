import { Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import Favorites from "./components/Favorites/Favorites";
import Movie from "./components/Movie/Movie";


function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;


