import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';
import ContactCommission from './Components/ContactCommission';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import EditGallery from './Components/EditGallery';

function App() {

  const [ loggedIn, setloggedIn ] = useState(false);

  return (
    <Router>
      <div className="App">
  
        <Navigation loggedIn={ loggedIn }/>
        
        <Routes>
          <Route path='/' element={ <Body showAdultGallery={false}/> }/>
          <Route path='/18plusgallery' element={ <Body showAdultGallery={true}/> }/>
          <Route path='/contactcommission' element={ <ContactCommission /> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/dashboard' element={ <Dashboard /> }/>
          <Route path='/editmain' element={ <EditGallery showAdultGallery={false}/> }/>
          <Route path='/edit18plus' element={ <EditGallery showAdultGallery={true}/> }/>
        </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
