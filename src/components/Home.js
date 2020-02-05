import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props){
    super(props)
    this.state={
      check1:false
    }
  }

  render () {
    return (
        <div>
          
           <hr class="vertical"></hr>
           <p>The selection you make here will be default autovoice settings<br></br> for the current and all the following examinations </p>    
           <input type="checkbox" name="check1" value="AutoVoice"></input>AutoVoice
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Instruction set
           <br></br>
           <br></br>
           &emsp;&emsp;
           <input type="checkbox" name="check1" value="AutoVoice"></input>Guide all patients through a breath hold
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           <select>
             <option value="English">English(US)</option>
             <option value="Hindi">Hindi</option>
             <option value="Chinese">Chinese</option>
             </select>   
           <br></br>&emsp;&emsp;&emsp;&nbsp;scans<br></br>&emsp;&emsp;&emsp;
           Recovery time for all patients,between &emsp;
           <select>
             <option value="5">5 Sec</option>
             <option value="10">10 Sec</option>
             <option value="15">15 Sec</option>
           </select><br></br>&emsp;&emsp;&emsp;
           successive breath holds in a single scan
           <br></br>
           <br></br>
           &emsp;&emsp; 
           <input type="checkbox" name="check1" value="AutoVoice"></input>Inform all patients about the duration of the<br></br>&emsp;&emsp;&emsp;&nbsp;warn all the patient before the table moves<br></br><br></br>&emsp;&emsp;
           <input type="checkbox" name="check1" value="AutoVoice"></input>Warn all the patients before the table moves<br></br>


          
        </div>

    );
  }
}
