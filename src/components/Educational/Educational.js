import React from 'react'

const Educational = (props) => {

    return (
        <div className="contInex">
            <div className="contizq">  
                <h4 className="company"><strong>Studied in:</strong> {props.place}</h4> 
                <h4 className="position"><strong>Degree:</strong> {props.degree}</h4>
            </div>
            <div className="contder">
                <h4 className="years"><strong>{props.yearss} - {props.toyearss}</strong></h4> 
            </div>
        </div>
    )
}

export default Educational
