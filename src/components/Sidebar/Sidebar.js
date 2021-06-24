import React from 'react'
import './sidebar.css'

function Sidebar(props){
    let name = props.name.toUpperCase()
    let location,email,phone,nombre;
    if (props.location !== ""){
        location = (
            <div className="mailS">
                <i class="fas fa-map-marker-alt textS"></i>
                <p className="textS textSS">{props.location}</p>
            </div>
        )
    }

    if (props.phone !== ""){
        phone = (
            <div className="mailS">
                <i class="fas fa-phone-square textS"></i>
                <p className="textS textSS">{props.phone}</p>
            </div>
        )
    }

    if (props.email !== ""){
        email = (
            <div className="mailS">
                <i className="fas fa-envelope textS"></i>
                <p className="textS textSS">{props.email}</p>
            </div>
        )
    }

    let suma;
    
    if (props.email !== "" || props.phone !== "" || props.location !== ""){
        suma = (
            <div className="contactsStuff">
                {email}
    
                {phone}
                
                {location}
    
            </div>
        )
    }

    let foto;

    if (props.showPro === true){
        foto = (
            <div className="profilePic">
                <img className="profilePicture" src="https://www.infoprision.com/sites/default/files/fg-avatar-anonymous-user-retina.png" alt="" />
            </div> 
        );
        nombre = (
            <div className="basicStuff">
                <h1 className="nameProf">{name}</h1>
                <p className="titProf"> {props.title}</p>
            </div>
        );
    } else {
        foto = "";
        nombre = (
            <div className="basicStuff">
                <h1 className="nameProfG">{name}</h1>
                <p className="titGrande"> {props.title}</p>
            </div>
        );
    }


        return (
            <div className="sidebar">
                {foto}
                
                {nombre}

                {suma}
            </div>
        )
}


export default Sidebar
