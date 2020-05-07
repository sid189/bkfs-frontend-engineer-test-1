import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div background-color= "#282c34">
      <header className="App-header">

        <nav>
          <ul>
            <li>Extraction Page</li>
            <div class="dropdown">
              <button class="dropbtn"><li>Document Types</li>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Select One Document Type</a>
                <a href="#">Select All Document Types</a>
                <a href="#">Select Multiple Document Types</a>
                <a href="#">Clear Your Selection</a>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
