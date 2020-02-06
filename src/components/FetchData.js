import React, { Component } from 'react';
import './Tables.css';
import edit from './EditImage.png';
import deleteImg from './Delete.png';
import send from './rightarrow.png';
import wave from './file_example_WAV_1MG.wav';
import SoundButton from './SoundButton.js';
import LanguageDropDown from './LanguageDropDown.js'

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };
    //this.url = {wave};
    this.audio = new Audio(wave);
  }
  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
  render() {

    return (
      <div>
        <h1 id="tabelLabel" >Customized Instruction set information</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {/* <select id="LanguageSelection">
          <option value="English">English(US)</option>
          <option value="Hindi">Hindi</option>
          <option value="Chinese">Chinese</option>
        </select> */}
         <LanguageDropDown></LanguageDropDown>
        <select>
          <option value="AddSet">AddSet</option>
          <option value="Hindi">Hindi</option>
          <option value="Chinese">Chinese</option>
        </select>

        <img src={edit} onClick="" alt="Edit" height="20" width="20" border="2" style={{marginLeft:560}}></img>&nbsp;&nbsp;
        <img src={deleteImg} onClick="" alt="Edit" height="20" width="20" border="2"></img>&nbsp;&nbsp;
        <img src={send} OnClick="" alt="Edit" height="20" width="20" border="2"></img>
        <br></br>
        <br></br>
        <table class="Tables">
          <tr style={{ "borderWidth": "2px", 'backgroundColor': "#white", 'borderStyle': 'solid' }} >
            <th>Description</th>
            <th>Instruction label</th>
            <th>Duration</th>
            <th>Instruction text</th>
          </tr>
          <tr style={{ "borderWidth": "2px", 'backgroundColor': "white", 'borderStyle': 'solid' }}>
            <td >Table movement</td>
            <td><SoundButton wave={wave} /><span>Normal</span></td>
            <td>0:04</td>
            <td>Please hold still while the table moves</td>

          </tr>
          <tr style={{ "borderWidth": "2px", 'backgroundColor': "#white", 'borderStyle': 'solid' }}>
            <td></td>
            <td><SoundButton wave={wave} />Scanset </td>
            <td>0:04</td>
            <td>In between the next few scans, the table will move</td>

          </tr>
          <tr style={{ "borderWidth": "2px", 'backgroundColor': "white", 'borderStyle': 'solid' }}>
            <td>Scan duration</td>
            <td><SoundButton wave={wave} />Above 5 minutes </td>
            <td>0:06</td>
            <td>The next scan will last for a little over five minutes</td>

          </tr>
          <tr style={{ "borderWidth": "2px", 'backgroundColor': "white", 'borderStyle': 'solid' }}>
            <td>             </td>
            <td><SoundButton wave={wave} />Above 10 minutes </td>
            <td>0:04</td>
            <td>the next scan will last for little more than 10 minutes</td>

          </tr>

          <tr style={{ "borderWidth": "2px", 'backgroundColor': "white", 'borderStyle': 'solid' }}>
            <td>             </td>
            <td><SoundButton wave={wave} />Breath scan </td>
            <td>0:03</td>
            <td>the next scan is a breath hold scan</td>

          </tr>
        </table>

           
      </div>
    );
  }
}