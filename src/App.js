
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/Contact Us';

function App() {
  // setting the sate
  const [page,setPage]=useState("home")

  return  (
    <>
    
    <Navbar style={{backgroundcolor:"pink"}} setPage={setPage}/>
        {page==="home" && <Home/>}
        {page==="about" && <About/>}
        {page==="contact" && <ContactUs/>}
 
    </>
  )
}

export default App;
