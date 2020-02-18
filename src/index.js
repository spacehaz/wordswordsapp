import './index.css';
import React from 'react'
import ReactDom from 'react-dom'

const container = document.getElementById('application')
import Application from './application'

ReactDom.render(<Application />, container)
