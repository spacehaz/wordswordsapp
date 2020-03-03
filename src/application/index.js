import React from 'react'
import { Header, Input, Checkbox, Button, Canvas } from '../components'
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
			preview: false,
			colorHexDisabled: false
		}
	}

	render () {
		const { word, translation, colorHex, preview, colorHexDisabled } = this.state
		return <div className='application'>
			<Header />
			<div className={styles.content}>
				<Input title='Word' value={word} onValueChange={({ value }) => this.setState({ word: value, preview: false })} />
				<Input title='Translation' value={translation} onValueChange={({ value }) => this.setState({ translation: value, preview: false })} />
				<Input disabled={colorHexDisabled} title='Color Hex' value={colorHex} onValueChange={({ value }) => this.setState({ colorHex: value, preview: false })} />
				<Checkbox title='Use random color' name='random_color' onValueChange={({ value }) => {
					this.setState({
						colorHex: value ? this.getRandomColor() : '',
						colorHexDisabled: value
					})
				}} />
				<div className={styles.controls}>
					<Button title='Go' onClick={_ => this.submitForm({ word, translation, colorHex })}/>
					<Button title='Clear' onClick={_ => window.location.href = '/' }/>
				</div>
				{preview && <div className={styles.canvas}>
					<div onClick={_ => this.save({ word, colorHex})}>
						<Canvas word={word} hex={colorHex} />
					</div>
					<div onClick={_ => this.save({ word: translation, colorHex })}>
						<Canvas word={translation} hex={colorHex} />
					</div>
				</div>}
			</div>
		</div>
	}

	getRandomColor() {
	  const letters = '0123456789ABCDEF'
	  let color = '#'
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)]
	  }
	  return color
	}

	submitForm () {
		this.setState({
			preview: true
		})
	}

	save ({ word, translation, colorHex, callback }) {
		const hex = colorHex[0] === '#' ? colorHex : `#${colorHex}`
		fetch('/api/generate-image', { body: JSON.stringify({ word, hex }), method: 'POST', headers: { 'Content-Type': 'application/json' } })
			.then(response => response.blob())
		  .then(blob => {
		    download(blob, `${word}_word.png`, 'image/png')  
		  })
		  .finally(_ => {
		  	callback && callback()
		  })
	}
}

export default Application