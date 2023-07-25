import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <AppRouter />
    </div>
  );
}

export default App;
