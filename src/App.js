import './App.css';
import React from 'react'
import uniqid from 'uniqid'
import HeaderNav from './components/Header/Header.js'
import InputText from './components/InputText/InputText.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import Description from './components/Description/Description.js'
import Experience from './components/Experience/Experience.js'
import Inxperience from './components/Experience/InExperience.js'
import Educational from './components/Educational/Educational.js'
import ExperienceMain from './components/Experience/ExperienceMain'
import EducationalMain from './components/Educational/EducationalMain';

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
      education: [],
      experience: [],
    }
    this.changeName = this.changeName.bind(this);
    this.changeProf = this.changeProf.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);

    this.addEducation = this.addEducation.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
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

  addExperience(){
    this.setState(prevState =>{ 
      let valor = {...prevState,
      experience: [
        ...prevState.experience,
        {
        id: uniqid(),
        company: "",
        position: "",
        start: "",
        to: ""
        }
        ]
    }
    return valor
    })
  }

  changeExperience(id,e,value){
    this.setState(prevState =>{
      let cambioExp = e.toLowerCase();
      let respuestaExp = prevState.experience.map(item => {
            if (item.id === id){
                return item[`${cambioExp}`] = `${value}`;
            } else {
                return item
            }
      })
    return respuestaExp
    })
  }

  deleteExperience(id){
    this.setState( prevState =>{
      // eslint-disable-next-line array-callback-return
      let dele = prevState.experience.filter(item => {
        if (item.id !== id){
          return item
        }
      })
      return prevState.experience = dele
    })
  }

  addEducation(){
    this.setState(prevState =>{ 
      let valor = {...prevState,
      education: [
        ...prevState.education,
        {
        id: uniqid(),
        studied: "",
        degree: "",
        start: "",
        end: ""
        }
        ]
    }
    return valor
    })
  }

  changeEducation(id,e,value){
    this.setState(prevState =>{
      let cambioExp = e.toLowerCase();
      let respuestaExp = prevState.education.map(item => {
            if (item.id === id){
                return item[`${cambioExp}`] = `${value}`;
            } else {
                return item
            }
      })
    return respuestaExp
    })
  }

  deleteEducation(id){
    this.setState( prevState =>{
      // eslint-disable-next-line array-callback-return
      let dele = prevState.education.filter(item => {
        if (item.id !== id){
          return item
        }
      })
      return prevState.education = dele
    })
  }
  

  render(){

    let experienceCv = this.state.experience.map(item =>{
      return <Inxperience  company={item.company} position={item.position} years={item.start} toyears={item.to} />
    });

    let experienceButton = this.state.experience.map( item => {
      return <ExperienceMain deleted={this.deleteExperience} opcion={this.changeExperience} id={item.id} />
    });

    let educationalCv = this.state.education.map( item => {
      return <Educational degree={item.degree} studied={item.place} yearss={item.start} toyearss={item.end} />
    });
    let educationalButton = this.state.education.map( item => {
      return <EducationalMain deleted={this.deleteEducation} id={item.id} opcion={this.changeEducation} />
    })

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
            {educationalButton}
            <button onClick={() => this.addEducation()} className="buttonAdd">Add</button>


            <h1 className="educationalInfo">Experience</h1>
            {experienceButton}
            <button onClick={() => this.addExperience()} className="buttonAdd">Add</button>


          </div>

          <div className="example">

              <Sidebar showPro={this.state.showPro} name={this.state.name} title={this.state.title} desc={this.state.description} email={this.state.email} location={this.state.location} phone={this.state.phone} />

              <div className="content">
                  <Description desc={this.state.description} />
                  <Experience title="Education" />
                  {educationalCv}

                  <Experience title="Experience" />

                  {experienceCv}

              </div>

              

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
