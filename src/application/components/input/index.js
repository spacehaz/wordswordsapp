import React from 'react'
import './styles.css'

class Input extends React.Component {
	constructor (props) {
		super(props)
		console.log('props from input constructor', props)
	}

	render () {
		const { type = 'text', value = '', placeholder = '', title, change } = this.props
		return <div className='input'>
			{title && <div className='input__title'>{title}</div>}
			<input
				className='input__main'
				type={type}
				value={value}
				onChange={event => this.myComponentValueChanged(event)}
				placeholder={placeholder}
			/>
		{/*
			onChange - встроенный обработчик событий реакта
			change - кастомное свойство, которое я передал в this.props, это функиця
		*/}
		</div>
	}

	myComponentValueChanged (event) {
		const { change } = this.props
		const { target } = event
		const value = target.value
		console.log({ value })
		change && change(value)
	}
}

export default Input