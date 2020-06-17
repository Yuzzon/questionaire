import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes } from './Routes';
// import ProgressBar from './components/ProgressBar';

function App() {


   return (
      <div className="wrapper">
         <Router>
            <Routes />
         </Router>
            
      </div>
   );
}

export default App;
