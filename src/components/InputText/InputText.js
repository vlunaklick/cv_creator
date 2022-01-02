import React from 'react'
import './inputtext.css'

const InputText = props => {
	return (
		<>
			<input
				onChange={props.opcion}
				className='inputL'
				type='text'
				placeholder={props.placeholder}
			/>
		</>
	)
}

export default InputText
