// src/App.js
import './App.css';
import React from 'react';
import Navbar from './compohome/nav';
import Home from './compohome/Home';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroForm from './compohome/cadastro';
import Sobreosite from './compohome/sobreosite';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<CadastroForm />} />
            <Route path="/sobreosite" element={<Sobreosite />} /> {/* Correção aqui */}
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
