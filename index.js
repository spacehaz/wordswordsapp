const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.use(express.static('public'));

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found')
	next()
})

app.listen(port, () => {
	console.log(`Server started at port ${port}`)
})