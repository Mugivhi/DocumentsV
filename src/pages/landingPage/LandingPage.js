import React,{useState} from 'react'
import About from '../about/About';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner'
// import './home.css'
 import Body from '../../components/body/Body';
// import Lodge from '../../components/rooms/Lodge';
// import Activities from '../../components/activities/Activities';

// import Footer from '../../components/footer/Footer';

 import Footer from '../../components/footer/Footer';
function LandingPage() {
  
    return (
    <div className='nav'>
      <Navbar/>
    <Body/>
    </div>

    )
}

export default LandingPage