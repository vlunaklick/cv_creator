import React from 'react'
import './sidebar.css'

function Sidebar(props){
    let name = props.name.toUpperCase()
    let location,email,phone;
    if (props.location !== ""){
        location = (
            <div class="mailS">
                <i class="fas fa-map-marker-alt textS"></i>
                <p className="textS textSS">{props.location}</p>
            </div>
        )
    }

    if (props.phone !== ""){
        phone = (
            <div class="mailS">
                <i class="fas fa-phone-square textS"></i>
                <p className="textS textSS">{props.phone}</p>
            </div>
        )
    }

    if (props.email !== ""){
        email = (
            <div class="mailS">
                <i className="fas fa-envelope textS"></i>
                <p className="textS textSS">{props.email}</p>
            </div>
        )
    }

    let suma = (
        <div className="contactsStuff">
            {email}

            {phone}
            
            {location}

        </div>
        
    )

        return (
            <div className="sidebar">
                <div className="basicStuff">
                    <h1 className="nameProf">{name}</h1>
                    <p className="titProf"> {props.title}</p>
                </div>

                {suma}
            </div>
        )
}


export default Sidebar


/* <div className="profilePic">
                    <img className="profilePicture" src="https://www.infoprision.com/sites/default/files/fg-avatar-anonymous-user-retina.png" alt="" />
                </div> */