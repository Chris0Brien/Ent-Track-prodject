// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use('/manga', require('./routes/Manga'))
app.use('/books', require('./routes/Books'))
app.use('/movies', require('./routes/Movies'))
app.use('/anime', require('./routes/Anime'))





app.listen(process.env.port, () => {
    console.log(`Server running on port: ${process.env.port}`);
 });