import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {

  return (
<>
<div className="App">
   <Navbar />
     <br />
     <br />
     <br />
     <br />
     <div className="content-wrapper ">
        <Home />
     </div>
     </div>
       
</>
   
   
  );
}

export default App;
