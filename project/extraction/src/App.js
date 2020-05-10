import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiSelect from "react-multi-select-component";

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

  const [selected, setSelected] = useState([]);



  return (
    <div background-color= "#282c34">
      <header className="App-header">

        <nav>
          <ul>
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
