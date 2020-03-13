import React from 'react';
import './App.css';

import NavBar from './components/template/NavBar';
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="App">
        <NavBar /> 
        <h1>Apenas uma texto</h1>
        <h2>Para não deixar essa página em branco</h2>
        <p>Quem sabe isso não pode me ajudar, não é mesmo? ;)</p>
        <Footer />
    </div>
  )
}

export default App;
