import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

class Input extends React.Component {
	render () {
		const { title, disabled } = this.props
		return <div>
			{title && <div className={styles.title}>{title}</div>}
			<input disabled={disabled} className={classNames(styles.container, {
				[styles.disabled]: disabled
			})} onChange={(e) => this.onChange({ e })} />
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