import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
