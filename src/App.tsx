// src/App.tsx
import React from "react";


import './App.css'

import NavBar from "./components/NavBar/NavBar";



const App = () => (
  <NavBar activeComp="home">
    <div className="home">Hello</div>
    
  </NavBar>
  
);

export default App;
