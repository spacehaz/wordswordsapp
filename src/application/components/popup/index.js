import React from 'react'
import styles from './styles.module.scss'

class Popup extends React.Component {
	render () {
		const { title, children } = this.props
		return <div className={styles.container}>
			{title}
			<div className={styles.content}>
				{children}
			</div>
		</div>
	}
}

export default  Popup