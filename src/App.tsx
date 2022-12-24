// src/App.tsx
import React from "react";


import './App.css'

import NavBar from "./components/NavBar/NavBar";



const App = () => (
  <NavBar activeComp="home">
    <h1 className="h1app">Hello React</h1>
    
  </NavBar>
  
);

export default App;
