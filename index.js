const express = require('express');
const app = express();
const port = 3003;
const path = require('path')
const bodyParser = require('body-parser')
const { createCanvas } = require("canvas")

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found')
	next()
})

app.post('/api/generate-image', (req, res, next) => {
	const WIDTH = 1080;
	const HEIGHT = 1080;
	const { hex = "#222222" , word = '' } = req.body
	const canvas = createCanvas(WIDTH, HEIGHT);
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = hex;
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.fillStyle = "#FEFEFE";
	ctx.font = "108px Arial";
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(word.toUpperCase(), parseInt(WIDTH / 2), parseInt(HEIGHT / 2))
	const buffer = canvas.toBuffer("image/png")
	res.status(200).send(buffer)
})

app.listen(port, () => {
	console.log(`Server started at port ${port}`)
})