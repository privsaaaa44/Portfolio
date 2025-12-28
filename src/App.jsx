import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
// import Snowfall from 'react-snowfall';


function App() {
  return (
    <>
      {/* Snowfall setup for the whole page */}
      {/* <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
        }}
        snowflakeCount={200}
      /> */}

      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <div className="content-wrapper">
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
