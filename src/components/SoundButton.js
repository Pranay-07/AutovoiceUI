import React from 'react'
//import wave from './file_example_WAV_1MG.wav';

class SoundButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            play: false,
            pause:true
          };
          this.togglePlay=this.togglePlay.bind(this)
          this.audio = new Audio(this.props.wave)
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
        
          <button onClick={this.togglePlay} height="10" width="10" style={{marginRight:10}}>{this.state.play ? 'Pause' : 'Play'}</button>
        
      );
    }
  }
  
  export default SoundButton;