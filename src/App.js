import './App.css';
import React from 'react'
import HeaderNav from './components/Header/Header.js'
import InputText from './components/InputText/InputText.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import Description from './components/Description/Description.js'
import Experience from './components/Experience/Experience.js'
import Inxperience from './components/Experience/InExperience'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      description: "",
      showPro: false,
      experience: [],
    }
    this.changeName = this.changeName.bind(this);
    this.changeProf = this.changeProf.bind(this);
  }

  changeName(event){
    let cambio = (event.target.placeholder).toLowerCase()
    this.setState(prevState =>{
      return prevState[`${cambio}`] = `${event.target.value}`;
    })
  }

  changeProf(){
    let valor = !(this.state.showPro)
    this.setState(prevState =>{
      return prevState.showPro = valor;
    })
  }


  render(){
    return (
      <div className="App">
        <HeaderNav />

        <div className="containers">

          <div className="main">
            <div className="heading">
              <h1 className="personalInfo">Personal Info</h1>
              <div className="boxP">
                <input onClick={(e) => this.changeProf(e)} id="probox" type="checkbox"/><label htmlFor="probox">Show profile picture</label>
              </div>
              
            </div>
    
            <InputText opcion={this.changeName} format="text" placeholder="Name"/>
            <InputText opcion={this.changeName} format="text" placeholder="Title"/>
            <InputText opcion={this.changeName} format="text" placeholder="Email"/>
            <InputText opcion={this.changeName} format="number" placeholder="Phone"/>
            <InputText opcion={this.changeName} format="number" placeholder="Location"/>
            <textarea  onChange={(e) => this.changeName(e)} id="description" placeholder="Description" rows="5"></textarea>

            <h1 className="educationalInfo">Education</h1>


            <h1 className="educationalInfo">Experience</h1>


          </div>

          <div className="example">

              <Sidebar showPro={this.state.showPro} name={this.state.name} title={this.state.title} desc={this.state.description} email={this.state.email} location={this.state.location} phone={this.state.phone} />

              <div className="content">
                  <Description desc={this.state.description} />
                  <Experience title="Education" />
                  

                  <Experience title="Experience" />
                  <Inxperience company="Coca Cola" position="Programador" years="2001" toyears="Now" />
                  <Inxperience company="Coca Cola" position="Programador" years="2001" toyears="Now" />
                  <Inxperience company="Coca Cola" position="Programador" years="2001" toyears="Now" />

              </div>

              

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
