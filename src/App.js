import './App.css';
import React from 'react'
import HeaderNav from './components/Header/Header.js'
import InputText from './components/InputText/InputText.js'
import Sidebar from './components/Sidebar/Sidebar.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      description: ""
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(event){
    console.log(event)
    let cambio = (event.target.placeholder).toLowerCase()
    this.setState(prevState =>{
      let res = prevState[`${cambio}`] = `${event.target.value}`;
      return res
    })
  }


  render(){
    return (
      <div className="App">
        <HeaderNav />

        <div className="containers">

          <div className="main">
            <h1 className="personalInfo">Personal Info</h1>
            <InputText opcion={this.changeName} format="text" placeholder="Name"/>
            <InputText opcion={this.changeName} format="text" placeholder="Title"/>
            <InputText opcion={this.changeName} format="text" placeholder="Email"/>
            <InputText opcion={this.changeName} format="number" placeholder="Phone"/>
            <InputText opcion={this.changeName} format="number" placeholder="Location"/>
            <textarea  onChange={(e) => this.changeName(e)} id="description" placeholder="Description" rows="5"></textarea>
          </div>

          <div className="example">

              <Sidebar name={this.state.name} title={this.state.title} desc={this.state.description} email={this.state.email} location={this.state.location} phone={this.state.phone} />

              <div className="content">
                
              </div>

              

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
