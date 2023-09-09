import React from 'react'
import './App.css'
import Home from './Home';
import Sidebar from './Sidebar';
import Searchpage from './Searchpage';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search/:searchTerm' element={<><div className="app-page">
        <Sidebar />
        <Searchpage /> 
      
      </div></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// 1:47:42