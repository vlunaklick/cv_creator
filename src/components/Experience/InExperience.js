import React from 'react'
import './experience.css'

const Inxperience = (props) => {

    return (
        <div className="contInex">
            <div className="contizq">  
                <h4 className="company"><strong>Worked at:</strong> {props.company}</h4> 
                <h4 className="position"><strong>As:</strong> {props.position}</h4>
            </div>
            <div className="contder">
                <h4 className="years"><strong>Time: </strong>{props.years} - {props.toyears}</h4> 
            </div>
        </div>
    )
}

export default Inxperience

