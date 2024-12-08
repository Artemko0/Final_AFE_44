import Title from '../title/Title';
import DB from '../../assets/DB';
import './App.css';
import { useState } from 'react';
import AboutUs from '../aboutUs/AboutUs';
import MainPage from '../mainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Footer from '../footer/Footer.js';
function App() {
  const[filteredDB,setFilteredDB] = useState (DB)
  return <div className="App">
    <Title/>
    <Routes>
      <Route 
      path='/' element={<MainPage filteredDB={filteredDB} setFilteredDB={setFilteredDB}/>}
       />
      <Route 
      path='/about'element={<AboutUs/>}
      />
    </Routes>
    <Footer/>
  </div>
}

export default App;

