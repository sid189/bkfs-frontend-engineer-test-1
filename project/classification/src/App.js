import React, { Component } from 'react';
import { CsvToHtmlTable } from "react-csv-to-table";
import Select from 'react-select';



const options = [
  { value: appraisalData, label: 'Appraisal' },
  { value: feedbackData, label: 'DU Codified Findings' },
  { value: disclosureData, label: 'Disclosure' },
  { value: creditData, label: 'Credit Report' },
  { value: '', label: 'ARM' },
  { value: paystubData, label: 'Pay Stubs' },
  { value: w2Data, label: 'W2' },
];


class App extends Component {
    constructor(){
    super()
    this.state = {
      doctype: [
        {
          id: 0,
          title: 'Appraisal',
          selected: false,
          key: 'doctype'
        },
        {
          id: 1,
          title: 'DU Codified Findings',
          selected: false,
          key: 'doctype'
        },
        {
          id: 2,
          title: 'Disclosure',
          selected: false,
          key: 'doctype'
        },
        {
          id: 3,
          title: 'Credit Report',
          selected: false,
          key: 'doctype'
        },
        {
          id: 4,
          title: 'ARM',
          selected: false,
          key: 'doctype'
        },
        {
          id: 5,
          title: 'Pay Stub',
          selected: false,
          key: 'doctype'
        },
        {
          id: 6,
          title: 'W2',
          selected: false,
          key: 'doctype'
        }
      ],
      customer: [
        {
          id: 0,
          title: 'Black Knight',
          selected: false,
          key: 'customer'
        },
        {
          id: 1,
          title: 'Google',
          selected: false,
          key: 'customer'
        },
        {
          id: 2,
          title: 'Heavy Water',
          selected: false,
          key: 'customer'
        },
        {
          id: 3,
          title: 'Yahoo',
          selected: false,
          key: 'customer'
        },
        {
          id: 4,
          title: 'We Pay',
          selected: false,
          key: 'customer'
        },

      ]
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.tabKeyPressed);
    window.addEventListener("mousedown", this.mouseClicked);
  }

  handleChange(evt) {
    this.setState({multiValue: [...evt.target.selectedOptions].map(o => o.value)});
  }



  tabKeyPressed = (e) => {
    if (e.keyCode === 9) {
      document.querySelector('body').classList.remove("noFocus")
      window.removeEventListener('keydown', this.tabKeyPressed);
      window.addEventListener('mousedown', this.mouseClicked);
    }
  }
  mouseClicked = (e) => {
    document.querySelector('body').classList.add("noFocus")
    window.removeEventListener('mousedown', this.mouseClicked);
    window.addEventListener('keydown', this.tabKeyPressed);
  }

  toggleItem = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  onSelectChange = (e) => {
    const values = [...e.target.selectedOptions].map(opt => opt.value);
    this.props.onChange(values);
  };


  render() {
    return (
      <div className="App">


        <div className="wrapper">
          <DropdownMultiple
            titleHelper="Document Type"
            title="Select Document Type"
            list={this.state.doctype}
            toggleItem={this.toggleItem}
          />


          <DropdownMultiple
            titleHelper="Customer"
            title="Select Customer"
            list={this.state.customer}
            toggleItem={this.toggleItem}
          />


        </div>

      </div>
    );
  }
}

export default App;
