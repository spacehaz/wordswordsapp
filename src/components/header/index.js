import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

class Header extends React.Component {
	render () {
		return <header className={styles.container}>
			WordsWords App
		</header>
	}
}

export default Header