import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import AboutUs from './About'

export default function home() {
  return (
    <div className="home-page">
        <Navbar></Navbar>
        <div className='bg-img'></div>
        <div className="middle-section">
            <div className='brand  font-bold dark:text-white md:text-5xl lg:text-6xl'>
              Loungify
            </div>
            <div className='description'>
            Discover a world of Excitement and fun with Loungify, Your Online Oasis For Relaxation & Tranquility.
                <br /><br />
                <Link to="/landing"> <button type="button" class="home-page-btn">Explore</button></Link>
                <br /><br />
            </div>
        </div>
        {/* <AboutUs/> */}
    </div>
  )
}
