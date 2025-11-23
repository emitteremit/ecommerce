import React from 'react'
import {Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import Homepage from './pages/Homepage';
import BioRunner from './Subpages/BioRunner';
import ActiveJR from './Subpages/ActiveJR';
import Biooriginal from './Subpages/Biooriginal';
import Bioperform from './Subpages/Bioperform';
import LimtedDl from './Subpages/LimtedDl';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/biorunner' element={<BioRunner/>}/>
          <Route path='/activejr' element={<ActiveJR/>}/>
          <Route path='/biooriginal' element={<Biooriginal/>}/>
          <Route path='/bioperform' element={<Bioperform/>}/>
          <Route path='/limitedDl' element={<LimtedDl/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
