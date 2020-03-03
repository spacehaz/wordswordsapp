import React from 'react'
import { Header, Button, Input, Checkbox, Popup } from './components'
import './styles.css'

class Application extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			word: '',
			translation: '',
			hex: '',
			users: []
		}
	}

	componentDidMount () {
		fetch('/data').then(res => res.json()).then(data => this.setState({
			users: data
		}))
	}

	render () {
		const { word, translation, hex, users } = this.state

		return <div className='content'>
			<Popup title='my modal window'>
				asdsadasdsa
			</Popup>
			<Header title='WordsWords App' />
			<div>
				{users.map(user => <div>{user.name}. age: {user.age}</div>)}
			</div>
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
				<Checkbox title='this is checkbox' />

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