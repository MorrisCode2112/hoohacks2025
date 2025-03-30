import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chatbot from "./ChatBot.jsx";
import "./App.css";
import Home from "./Home";
import {useState} from "react";
import Meditate from "./Meditate";


function App() {
  const [count, setCount] = useState(0);

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



export default App;
