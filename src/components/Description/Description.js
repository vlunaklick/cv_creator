import React from 'react'
import './description.css'

const Description = (props) => {

    let descT;

    if (props.desc !== ""){
        descT = (
            <div className="contM">
                <h3 className="upperTitle">Description</h3>
                <p className="pE">{props.desc}</p>
            </div>
        )
    }


    return (
        <>
        {descT}
        </>
    )
}

export default Description
