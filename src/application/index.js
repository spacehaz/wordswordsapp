import React from 'react'
import { Header, Input, Button } from '../components'
import './styles.css'
import styles from './styles.module.scss'
import download from 'downloadjs'

class Application extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			word: '',
			translation: '',
			colorHex: ''
		}
	}

	render () {
		const { word, translation, colorHex } = this.state
		return <div className='application'>
			<Header />
			<div className={styles.content}>
				<Input title='Word' value={word} onValueChange={({ value }) => this.setState({ word: value })} />
				<Input title='Translation' value={translation} onValueChange={({ value }) => this.setState({ translation: value })} />
				<Input title='Color Hex' value={colorHex} onValueChange={({ value }) => this.setState({ colorHex: value })} />
				<Button title='Go' onClick={_ => this.submitForm({ word, translation, colorHex })}/>
			</div>
		</div>
	}

	submitForm ({ word, translation, colorHex }) {
	fetch('/api/generate-image', { body: JSON.stringify({ word, hex: colorHex }), method: 'POST', headers: { 'Content-Type': 'application/json' } })
		.then(response => response.blob())
	  .then(blob => {
	    download(blob);           
	  })
		console.log({ word, translation, colorHex })
	}
}

export default Application