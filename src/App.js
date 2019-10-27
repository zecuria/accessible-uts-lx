import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <a className="skip-to-main" href="#main">Skip to main content</a>
      <Header />
      <Main />
    </div>
  );
}

export default App;
