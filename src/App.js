import React from 'react'
import Home from './screen/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screen/Login';

import 'bootstrap/dist/js/bootstrap.bundle';
//import 'boostrap/dist/js/boostrap.bundle.min.js'
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';  // Corrected the typo in 'boostrap' to 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Corrected the typo in 'boostrap' to 'bootstrap'

export default function App() {
  return (
    <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
       </div>
    </Router>
   
  )
}
