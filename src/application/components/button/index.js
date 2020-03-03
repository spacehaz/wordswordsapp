import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

console.log({ styles })

class Button extends React.Component {
	constructor (props) {
		super(props)
		console.log(document.querySelector('.button'))
		console.log('1')
		this.state = {}
	}

	componentDidMount () {
		// встроенный метод реакта
		console.log('3')
		console.log(this.button)
	}


	render () {
		console.log('2')
		const { title = 'Press', click, disabled } = this.props
		return <button
			ref={node => { this.button = node }}
			disabled={disabled}
			className={classNames(styles.button, {
				[styles.button_disabled]: disabled
			})}
			onClick={e => click && click()}
		>
			{title}
		</button>
	}

}

export default Button