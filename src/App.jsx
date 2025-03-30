import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chatbot from "./ChatBot.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Chatbot Page */}
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="pulsating-sphere"></div>
      <div className="content">
        <h1>Mental Zen</h1>
        <p className="subtitle">
          Click on the buttons below to improve your mental health with a
          personalized AI!
        </p>
        <div className="button-container">
          <Link to="/meditate">
            <button className="button">Meditate With Zenny</button>
          </Link>
          <Link to="/chat">
            <button className="button">Start New Chat</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;