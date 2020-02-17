import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

class Button extends React.Component {
	render () {
		const { title, onClick } = this.props
		return <button className={styles.container} onClick={_ => onClick && onClick()}>
			{title}
		</button>
	}
}

export default Button