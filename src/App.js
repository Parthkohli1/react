import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login'
import Home from './components/home'
import Register from './components/register'
import Navbar from './components/Navbar';
function App() {
  return (
  
      <Router>
    <Navbar/>
        <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        </Routes>
    
        </Router>
    
  );
}

export default App;
