import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App container bg-light p-0">
      <Header />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;
