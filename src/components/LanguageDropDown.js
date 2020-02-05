import React from "react"

class LanguageDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state={selectedValue:"N/A"};
        this.handleDropDownChange=this.handleDropDownChange.bind(this);
    }
    displaySelectedValue()
    {
    return <p>{this.state.selectedValue}</p>
    }
    handleDropDownChange(e) {
        this.setState({selectedValue: e.target.value});
        console.log(this.state.selectedValue);
    }

    render() {
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
              <p>Selected value is : {this.state.selectedValue}</p>
        <p>{this.displaySelectedValue}</p>
            </div>
          
        );
      }
    }
export default LanguageDropDown