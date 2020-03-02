import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

class Checkbox extends React.Component {
	render () {
		const { title, name = (new Date()) } = this.props
		return <div className={styles.container}>
			<input id={name} type='checkbox' onChange={(e) => this.onChange({ e })} />
			{title && <label htmlFor={name} className={styles.title}>{title}</label>}
		</div>
	}

	onChange ({ e }) {
		const { onValueChange } = this.props
		const value = e.target.checked
		onValueChange && onValueChange({ value })
	}
}

export default Checkbox