import React, {Component} from 'react';
import './App.css';

import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import Personal from "./components/template/Personal"
import Professional from "./components/template/Professional";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Personal/>
        <Professional image={"utfpr-logo.svg"} text={"Graduação"} />
        <div style={{height: "250px", backgroundColor: "#FFFFFF"}}>
            <h1>Parte 1</h1>
            <p>Aqui será onde deixarei minha descrição pessoal</p>
        </div>
        <div style={{height: "250px", backgroundColor: "#342A21", color: "#FFFFFF"}}>
            <h1>Parte 2</h1>
            <p>Aqui será onde deixarei minha formação</p>
        </div>
        <div style={{height: "250px", backgroundColor: "#FFFFFF"}}>
            <h1>Parte 3</h1>
            <p>Não definido ainda</p>
        </div>
        <Footer />
    </div>
  )
}

export default App;
