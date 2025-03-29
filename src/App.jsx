import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Meditate from "./Meditate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditate" element={<Meditate />} />
      </Routes>
    </Router>
  );
}

export default App;