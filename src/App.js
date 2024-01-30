import React from 'react'
import Home from './screen/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screen/Login';

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
