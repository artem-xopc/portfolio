import React from 'react';
import './App.css';
import NavBar from './components/NavbarComponents/NavBar';
import AppRouter from './routes/AppRouter';
import Banner from './components/Banner';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <AppRouter />
    </div>
  );
}

export default App;
