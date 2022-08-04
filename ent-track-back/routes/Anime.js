const router = require('express').Router()
const db = require("../models")

const { Anime } = db

router.post('/', async (req, res) => {
    const anime = await Anime.create(req.body)
    res.json(anime)
})


router.get('/', async (req, res) => {
    const anime = await Anime.findAll()
    res.json(anime)
})

module.exports = router