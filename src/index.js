


import React from 'react';
import ReactDOM from 'react-dom/client';
import FormURL from "./components/FormURL.jsx";
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Qr from './routes/qr';
import About from './routes/about';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="qr" element={<Qr />} />
    </Routes>
  </BrowserRouter>

);
