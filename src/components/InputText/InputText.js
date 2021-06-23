import React from 'react'
import './inputtext.css'

const InputText = (props) => {

    return (
        <div>
            <input onChange={props.opcion} className="inputL" type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default InputText
