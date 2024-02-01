import {Component}  from 'react'
import './index.css'

class LightDarkMode extends Component{
  state = {isDarkMode: false}
  
  onChangeMode = ()=>{
    const {isDarkMode} = this.state
    this.setState({isDarkMode:!isDarkMode})
  }
   render(){
    let modecls 
    const {isDarkMode} = this.state
    const modeText = isDarkMode ? ((modecls="darkMode"),'Light Mode') : ((modecls="lightMode"),'Dark Mode')
     return(
        <div className='container'>
            <div className={modecls}>
                <h1 class="mode-heading">Click To Change Mode</h1>
                <button class="mode-btn" onClick={this.onChangeMode}>{modeText}</button>
            </div> 
        </div>
     )
   }   
}

export default LightDarkMode;