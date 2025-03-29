import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
          <a href="#">
            <button className="button">Meditate With Zenny</button>
          </a>
          <a href="#">
            <button className="button">Start New Chat</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
