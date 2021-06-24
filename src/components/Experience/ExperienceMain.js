import React from 'react'
import './experience.css'

const ExperienceMain = (props) => {

    return (
        <div className="newExperience">
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Company" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Position" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Start" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="To" />
                <button onClick={() => props.deleted(props.id)} id={props.id} className="buttonAdd">Delete</button>
        </div>
    )
}

export default ExperienceMain