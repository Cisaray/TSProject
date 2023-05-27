import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {FavoritesPages} from "./pages/FavoritesPages";
import {NavBar} from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<FavoritesPages/>}/>
      </Routes>
    </div>
  );
}

export default App;
