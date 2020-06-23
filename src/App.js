import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
   reducer, composeWithDevTools()
);

function App() {
   return (
      <div className="wrapper">
         <Provider store={store}>
            <Router>
               <Routes />
            </Router>
         </Provider>
      </div>
   );
}

export default App;
