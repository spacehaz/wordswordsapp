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
      colorHexDisabled: false,
      randomColor: false
    }
  }

  render () {
    const { word, translation, colorHex, preview, colorHexDisabled, randomColor } = this.state
    const finalColor = this.formatColor({ hex: randomColor ? this.getRandomColor() : colorHex })
    return <div className='application'>
      <Header />
      <div className={styles.content}>
        <Input title='Word' value={word} onValueChange={({ value }) => this.setState({ word: value, preview: false })} />
        <Input title='Translation' value={translation} onValueChange={({ value }) => this.setState({ translation: value, preview: false })} />
        <Input disabled={colorHexDisabled} title='Color Hex' value={colorHex} onValueChange={({ value }) => this.setState({ colorHex: value, preview: false })} />
        <Checkbox title='Use random color' name='random_color' onValueChange={({ value }) => {
          this.setState({
            colorHexDisabled: value,
            randomColor: value
          })
        }} />
        <div className={styles.controls}>
          <Button title='Go' onClick={_ => this.submitForm()}/>
          <Button title='Clear' onClick={_ => window.location.href = '/' }/>
        </div>
        {preview && <div className={styles.canvas}>
          <div onClick={_ => this.save({ word, finalColor})}>
            <Canvas word={word} hex={finalColor} />
          </div>
          <div onClick={_ => this.save({ word: translation, finalColor })}>
            <Canvas word={translation} hex={finalColor} />
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
      preview: false,
      loading: true
    }, _ => window.setTimeout(_ => {
      this.setState({
        preview: true,
        loading: false
      })
    }, 1000))
  }

  formatColor ({ hex }) {
    return hex[0] === '#' ? hex : `#${hex}`
  }

  save ({ word, translation, finalColor, callback }) {
    const hex = this.formatColor({ hex: finalColor })
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