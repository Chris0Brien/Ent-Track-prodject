const router = require('express').Router()
const db = require("../models")

const { Movies } = db

router.post('/', async (req, res) => {
    const movies = await Movies.create(req.body)
    res.json(movies)
})


router.get('/', async (req, res) => {
    const movies = await Movies.findAll()
    res.json(movies)
})

module.exports = router