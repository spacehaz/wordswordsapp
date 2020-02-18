import React from 'react'
import './styles.css'

class Header extends React.Component {
	render () {
		const { title = 'Default title' } = this.props

		return <header className='header'>
			{title}
		</header>
	}
}

export default Header