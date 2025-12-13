import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from './pages/Homepage';
import BioRunner from './Subpages/BioRunner';
import ActiveJR from './Subpages/ActiveJR';
import Biooriginal from './Subpages/Biooriginal';
import Bioperform from './Subpages/Bioperform';
import LimtedDl from './Subpages/LimtedDl';
import Shopall from './pages/Shopall';
import ActiveQxP from './pages/ActiveQxP';
import Artisanal from './pages/Artisanal';
import Kids from './pages/Kids';
import Aboutus from './pages/Aboutus';
import CartPage from './pages/CartPage';
import { CartProvider } from './Components/CartContext';
import SignalDL from './Subpages/SignalDL';
import ArtisanalDl from './Subpages/ArtisanalDl';
import CoreDl from './Subpages/CoreDl';
import BioBasic from './Subpages/BioBasic';
import Naturaljr from './Subpages/Naturaljr';
import ClassicJr from './Subpages/ClassicJr';
import OriginJr from './Subpages/OriginJr';
import Checkout from './pages/Checkout';
import BestSeller from './pages/BestSeller';

function App() {


  return (
    <>
      <Router>
        <CartProvider>
          <CartProvider/>
          <Routes>

            <Route path='/' element={<Homepage />} />
            <Route path='/biorunner' element={<BioRunner />} />
            <Route path='/activejr' element={<ActiveJR />} />
            <Route path='/biooriginal' element={<Biooriginal />} />
            <Route path='/bioperform' element={<Bioperform />} />
            <Route path='/limitedDl' element={<LimtedDl />} />
            <Route path='/bestsellers' element={<BestSeller />} />
            <Route path='/shopall' element={<Shopall />} />
            <Route path='/activeqxp' element={<ActiveQxP />} />
            <Route path='/artisanal' element={<Artisanal />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/CartPage' element={<CartPage />} />
            <Route path='/signaldl' element={<SignalDL/>} />
            <Route path='/artisanalDl' element={<ArtisanalDl/>} />
            <Route path='/coredl' element={<CoreDl/>} />
            <Route path='/biobasic' element={<BioBasic/>} />
            <Route path='/naturaljr' element={<Naturaljr/>} />
            <Route path='/classicjr' element={<ClassicJr/>} />
            <Route path='/originjr' element={<OriginJr/>} /> 
            <Route path='/checkout' element={<Checkout/>} /> 
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
