import React from 'react'
import { Header, Input, Button, Canvas } from '../components'
import './styles.css'
import styles from './styles.module.scss'
import download from 'downloadjs'

class Application extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			word: '',
			translation: '',
			colorHex: '',
			preview: false
		}
	}

	render () {
		const { word, translation, colorHex, preview } = this.state
		return <div className='application'>
			<Header />
			<div className={styles.content}>
				<Input title='Word' value={word} onValueChange={({ value }) => this.setState({ word: value, preview: false })} />
				<Input title='Translation' value={translation} onValueChange={({ value }) => this.setState({ translation: value, preview: false })} />
				<Input title='Color Hex' value={colorHex} onValueChange={({ value }) => this.setState({ colorHex: value, preview: false })} />
				<Button title='Go' onClick={_ => this.submitForm({ word, translation, colorHex })}/>
				{preview && <div className={styles.canvas}>
					<Canvas word={word} hex={colorHex} />
					<Canvas word={translation} hex={colorHex} />
					<Button title='Save' onClick={_ => {
						this.save({ word, colorHex, callback: _ => this.save({ word: translation, colorHex }) })
					}} />
				</div>}
			</div>
		</div>
	}

	submitForm () {
		this.setState({
			preview: true
		})
	}

	save ({ word, translation, colorHex, callback }) {
		fetch('/api/generate-image', { body: JSON.stringify({ word, hex: colorHex }), method: 'POST', headers: { 'Content-Type': 'application/json' } })
			.then(response => response.blob())
		  .then(blob => {
		    download(blob)  
		  })
		  .finally(_ => callback && callback())
	}
}

export default Application