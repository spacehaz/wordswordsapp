import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

class Input extends React.Component {
	render () {
		const { title } = this.props
		return <div>
			{title && <div className={styles.title}>{title}</div>}
			<input className={styles.container} onChange={(e) => this.onChange({ e })} />
		</div>
	}

	onChange ({ e }) {
		const { onValueChange } = this.props
		const value = e.target.value
		console.log({ value })
		onValueChange && onValueChange({ value })
	}
}

export default Input