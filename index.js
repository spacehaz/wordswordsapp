const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const bodyParser = require('body-parser')
const { createCanvas } = require('canvas')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.post('/generate-image', (req, res, next) => {
	const { word, translation, hex } = req.body
	const canvas = createCanvas(1080, 1080)
	const ctx = canvas.getContext('2d')
	ctx.fillStyle = `${hex}`;
  ctx.fillRect(0, 0, 1080, 1080);
  ctx.fillStyle = '#FFF';
  ctx.textBaseline = "top";
  ctx.fillText(word, 1080 / 2, 1080 / 2);

	// res.status(200).send({ word, translation, hex })
})

app.get('*', (req, res, next) => {
	res.status(404).send('Sorry, page not found')
	next()
})

app.listen(port, () => {
	console.log(`Server started at port ${port}`)
})