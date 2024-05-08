<<<<<<< HEAD
// src/App.js
=======
>>>>>>> 95220621fb385dc6e9ae6098a570a87977615a19
import './App.css';
import React from 'react';
import Navbar from './compohome/nav';
import Home from './compohome/Home';
import Footer from './footer';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
>>>>>>> 95220621fb385dc6e9ae6098a570a87977615a19
import CadastroForm from './compohome/cadastro';
import Sobreosite from './compohome/sobreosite';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<CadastroForm />} />
            <Route path="/sobreosite" element={<Sobreosite />} /> {/* Correção aqui */}
          </Routes>
          <Footer />
=======
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<CadastroForm />} />
              <Route path="/sobreosite" elemente={<Sobreosite/>} />
            </Routes>
            <Footer />
>>>>>>> 95220621fb385dc6e9ae6098a570a87977615a19
        </header>
      </div>
    </Router>
  );
}

export default App;
