import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PersonalInformation2 from './views/PersonalInformation2';
import PersonalInformation1 from './views/PersonalInformation1';
import Summary from './views/Summary';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return(
    <React.Fragment>
    <Header />
    <Routes>
    <Route path='/' element={<Navigate to='/personal-info1'/>}/>
    <Route path='/personal-info1' element={<PersonalInformation1/>}/>
    <Route path='/personal-info2' element={<PersonalInformation2/>}/>
    <Route path='/summary' element={<Summary/>}/>
    </Routes>
    <Footer />
    </React.Fragment>
  );
}

export default App;