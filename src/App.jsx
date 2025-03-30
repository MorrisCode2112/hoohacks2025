import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chatbot from "./ChatBot";
import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";


function App() {

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Chatbot Page */}
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/meditate" element={<Meditate />} />
      </Routes>
    </Router>
  );
}



export default App;
