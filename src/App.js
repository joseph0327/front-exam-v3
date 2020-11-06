
import './App.css';
import React, {useState } from 'react'
import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import LogIn from './components/LogIn'
import Register from "./components/Register";
import News from "./components/News"
import Footer from "./components/Footer"

function App() {

  const [displaylogin, setdisplaylogin] = useState(false)
  const [displayRegister,setDisplayRegister] = useState(false)

  const showLogin = () => setdisplaylogin(!displaylogin)
  const showRegister = () => setDisplayRegister(!displayRegister)
  
  return (
    <div className="App">
        <Navbar showLogin={showLogin}/> 
        <LogIn displaylogin={displaylogin} showLogin={showLogin} showRegister={showRegister} />
        <Register displayRegister={displayRegister} showRegister={showRegister} showLogin={showLogin}/>
        <InfoSection />
        <News />
        <Footer />
    </div>
  );
}

export default App;
