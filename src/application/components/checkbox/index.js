import React, { useState } from 'react'


export default ({ title }) => { // props -> { title: 'blabla' }
	const [ checked, setChecked ] = useState(false)
	return <div>
		<input type='checkbox' onChange={_ => setChecked(!checked)}/>
		<span>{title}</span>
		<div>checked: {String(checked)}</div>
	</div>
}