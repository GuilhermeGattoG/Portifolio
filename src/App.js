import React, {Component} from 'react';
import './App.css';

import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import Personal from "./components/template/Personal"
import Professional from "./components/template/Professional";
import AboutPage from "./components/template/AboutPage";
import Tecnologies from "./components/template/Tecnologies"

function App() {
  return (
    <div className="App">
        <NavBar />
        <Personal/>
        <Professional />
        <AboutPage/>
        <Tecnologies />
        <Footer />
    </div>
  )
}

export default App;
