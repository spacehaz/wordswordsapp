import React from 'react'
import { Header, Button, Input } from './components'
import './styles.css'

class Application extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			word: '',
			translation: '',
			hex: ''
		}
	}

	render () {
		const { word, translation, hex } = this.state

		return <div className='content'>
			<Header title='WordsWords App' />
			<div className='content__body'>
				<Input
					title='Word'
					value={word}
					change={value => this.setState({ word: value })}
				/>
				<Input
					value={translation}
					title='Translation'
					change={value => this.setState({ translation: value })}
				/>
				<Input
					value={hex}
					title='Color-hex'
					placeholder='Type hex (only digits)'
					change={value => this.setState({ hex: value })}
				/>

			{/* new Input({ title: 'Color-hex', placeholder: 'Type hex (only digits)' })*/}
			</div>
			<Button
				title='Go'
				click={_ => this.submit()}
			/>
		</div>
	}

	submit () {
		const { word, translation, hex } = this.state
		fetch('/generate-image', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ word, translation, hex })
			}
		)
		// тут логика отправки данных на сервер
	}
}

export default Application