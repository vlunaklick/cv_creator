import React from 'react'
import './sidebar.css'

function Sidebar(props){
    let name = props.name.toUpperCase()
    let location,email,phone;
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
        )
    } else {
        foto = "";
    }


        return (
            <div className="sidebar">
                {foto}
                <div className="basicStuff">
                    <h1 className="nameProf">{name}</h1>
                    <p className="titProf"> {props.title}</p>
                </div>

                {suma}
            </div>
        )
}


export default Sidebar
