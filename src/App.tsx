import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavbarComponents/NavBar';
import AppRouter from './routes/AppRouter';
import Main from './pages/Main';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <AppRouter />
    </div>
  );
}

export default App;
