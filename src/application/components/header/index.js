import React from 'react'
import styles from './styles.module.scss'

class Header extends React.Component {
	render () {
		const { title = 'Default title' } = this.props

		return <header className='header'>
			{title}
			<button className={styles.button}>Sign up</button>
		</header>
	}
}

export default Header