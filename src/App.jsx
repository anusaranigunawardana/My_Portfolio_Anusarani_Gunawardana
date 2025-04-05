import React from "react";
import "./App.css";
import vectorIcon from './assets/Portfolio Assets/Hello Vector 1.png'
import vectorIcon2 from './assets/Portfolio Assets/Hello Vector 2.png'


function App() {
  return (
    <div className="main-layout">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#resume">Resume</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hello-container">
        <div className="hello-box">
          <span>Hello!</span>
        </div>
        <img src={vectorIcon} alt="vector" className="hello-vector-external" />
      </div>

       
        <h1 className="hero-title">
          I'm <span className="hero-name">Anusarani</span>,<br />
          UI/UX Designer
        </h1>
       <section className="hero-section">
        <img 
          src={vectorIcon2} 
          alt="decorative corner element" 
          className="corner-vector" 
        />
      </section>
    </div>
  );
}
export default App;
