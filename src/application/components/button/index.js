import React from 'react'
import './styles.css'

class Button extends React.Component {
	render () {
		const { title = 'Press', click } = this.props

		return <button
			className='button'
			onClick={e => click && click()}
		>
			{title}
		</button>
	}
}

export default Button