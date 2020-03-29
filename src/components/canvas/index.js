import React from 'react'
import styles from './styles.module.scss'


class Canvas extends React.Component {
  componentDidMount() {
    const { width = 320, height = 320, word, hex } = this.props
    const canvas = this.canvas
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = "rgba(255,255,255,0.9)"
    ctx.font = "32px Geometria"
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(word, parseInt(width / 2), parseInt(height / 2))
  }

  render() {
    const { width = 320, height = 320 } = this.props
    return <div className={styles.container}>
      <canvas ref={node => { this.canvas = node }} width={width} height={height} />
    </div>
  }
}

export default Canvas
