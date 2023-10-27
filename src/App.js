// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#200e43';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return ( 
    <>
    {/* <Router>
      <Navbar title="FabulousText"  mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path='/' element={<TextForm heading="Enter Text to Convert" mode={mode}/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </Router> */}
      <Navbar title="FabulousText"  mode={mode} toggleMode={toggleMode}/>
      {/* <div className="container">
        
      </div> */}
      <div className="container">
        <TextForm heading="Enter Text to Convert" mode={mode}/>
      </div>
    </>
  );
}

export default App;
