import React from 'react'

function Button({ text, ...rest }) {
	return <button {...rest}>{text}</button>
}

export default Button
