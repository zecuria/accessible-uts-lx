import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <a className="skip-to-main" href="#main">Skip to main content</a>
      <Header />
      <div style={{ maxHeight: 'calc(100vh - 100px)', overflow: 'scroll' }}>
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
