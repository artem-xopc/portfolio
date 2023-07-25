import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio />
      <AppRouter />
    </div>
  );
}

export default App;
