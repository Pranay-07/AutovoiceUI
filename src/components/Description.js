import React,{Component} from 'react'

class Description extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        let InstructionLabel=this.props.InstructionLabel;
        let Duration=this.props.Duration;
        let InstructionText=this.props.InstructionText;
        return (
        <div>{InstructionLabel},{Duration},{InstructionText}</div>
        );
    }
}
export default Description