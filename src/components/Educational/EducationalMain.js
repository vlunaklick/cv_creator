import React from 'react'

const EducationalMain = (props) => {

    return (
        <div className="newExperience">
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Place" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Degree" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="Start" />
                <input onChange={(e) => props.opcion(props.id,e.target.placeholder,e.target.value)} className="inputL" type="text" placeholder="End" />
                <button onClick={() => props.deleted(props.id)} id={props.id} className="buttonAdd">Delete</button>
        </div>
    )
}

export default EducationalMain