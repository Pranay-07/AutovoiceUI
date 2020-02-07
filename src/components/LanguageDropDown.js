import React, { Component } from "react"
import Language from './Language'

class LanguageDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedValue: "N/A" };
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }
  handleDropDownChange(e) {
    this.setState({ selectedValue: e.target.value });
    console.log(this.state.selectedValue);
  }

  render() {

    const inst1 = { Label: "Label1", Text: "Ins Text 1", Duration: 10 };
    const inst2 = { Label: "Label2", Text: "Ins Text 2", Duration: 20 };
    const inst3 = { Label: "Label3", Text: "Ins Text 3", Duration: 30 };
    const inst4 = { Label: "Label4", Text: "Ins Text 4", Duration: 40 };

    const insArray = {"N/A": [], "English": [inst1], "Hindi": [inst2], "Arabic": [inst3], "Chinese": [inst4]};

    return (
      <div>
        <div>
          <select id="dropdown" onChange={(e) => this.handleDropDownChange(e)}>
            <option value="N/A">N/A</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <Language Description={insArray[this.state.selectedValue]}></Language>
      </div>

    );
  }
}
export default LanguageDropDown