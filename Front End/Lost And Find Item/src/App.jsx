import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from "react-router-dom";
import MyFoundItem from './MyFoundItem.jsx';
import MyLostItem from './MyLostItem.jsx';
import Dashbord from './Dashbord.jsx';
import { Link } from "react-router-dom";



function App() {
  
  return (
    <>
      <div>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/mylostitem" element={<MyLostItem />} />
          <Route path="/myfounditem" element={<MyFoundItem />} />
        </Routes>
      </div>
    </>
  )
}

export default App
