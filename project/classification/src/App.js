import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiSelect from "react-multi-select-component";
import Hamoni from 'hamoni-sync';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const Example: React.FC = () => {
  const options = [
    { label: "Appraisal", value: "appraisal" },
    { label: "DU Codified Findings", value: "du" },
    { label: "Disclosure", value: "disclosure" },
    { label: "Credit Report", value: "credit" },
    { label: "ARM", value: "rider" },
    { label: "Pay Stub", value: "paystub" },
    { label: "W2", value: "w2" },
  ];

  const customerList = [
    { label: "Black Knight", value: "bkfs" },
    { label: "Google", value: "googl" },
    { label: "Heavy Water", value: "hw" },
    { label: "Yahoo", value: "yahoo" },
    { label: "We Pay", value: "wepay" }
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div background-color= "#282c34">
      <header className="App-header">
        <nav>
          <ul>
            <li>Classification Page</li>
            <div class="dropdown">
              <button class="dropbtn"><li>Customer Names</li>
                <i class="fa fa-caret-down"></i>
              </button>
              <div>
                <MultiSelect
                  options={customerList}
                  value={selected}
                  onChange={setSelected}
                />
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn"><li>Document Types</li>
                <i class="fa fa-caret-down"></i>
              </button>

              <div>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                />
              </div>

            </div>
          </ul>
        </nav>
      </header>
    </div>

  );
};



export default Example;
