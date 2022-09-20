import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { Qrgen } from "./routes/qrgen";
import About from "./routes/about";
import Homepage from "./routes/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="qrgen" element={<Qrgen />} />
      </Routes>
    </div>
  );
}

export default App;
