import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ text, ...rest }) {
	return <Link {...rest}>{text}</Link>
}

export default ButtonLink
