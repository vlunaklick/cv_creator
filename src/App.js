import './App.css';
import React from 'react'
import HeaderNav from './components/Header/Header.js'
import InputText from './components/InputText/InputText.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      title: "",
      email: "",
      Phone: "",
    }
  }


  render(){
    return (
      <div className="App">
        <HeaderNav />

        <div className="containers">

          <div className="main">
            <h1 className="personalInfo">Personal Info</h1>
            <InputText format="text" placeholder="Name"/>
            <InputText format="text" placeholder="Title"/>
            <InputText format="text" placeholder="Email"/>
            <InputText format="number" placeholder="Phone"/>
            <InputText format="number" placeholder="Location"/>
            <textarea id="description" placeholder="Description..." rows="5"></textarea>
          </div>

          <div className="example">

              <div className="content">
                
              </div>
              

              <div className="sidebar">
                  
              </div>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
