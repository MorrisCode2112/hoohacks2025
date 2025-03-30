import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./App.css";

function Home() {
    const navigate = useNavigate(); // Hook for navigation
    console.log("Home component is rendering..."); // Debug message

    
    return (
    
      <div className="container">
        {/* Pulsating Background */}
        
        <div className="pulsating-sphere"></div>
  
        {/* Content */}
        <div className="content">
          <h1>Mental Zen</h1>
          <p className="subtitle">
            Click on the buttons below to improve your mental health with a
            personalized AI!
          </p>
          <div className="button-container">
            <button className="button" onClick={() => navigate("/meditate")}>
              Meditate With Zenny
            </button>
            <button className="button" onClick={() => navigate("/chat")}>
              Start New Chat
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  