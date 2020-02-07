import React, { Component } from 'react'
import Description from './Description'

class Language extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.Description.map((ins)=>
                  <Description InstructionLabel={ins.Label} Duration={ins.Duration} InstructionText={ins.Text} />)}
             </div>
        );
    }
}
export default Language