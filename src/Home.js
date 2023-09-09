import React from 'react'
import './Home.css'
import Sidebar from './Sidebar';
import Recommendedvideos from './Recommendedvideos';

function Home() {
  return (
    <div className="App">
  

      <div className="app-page">
        <Sidebar />
        <Recommendedvideos /> 
      
      </div>

    </div>
  )
}

export default Home
