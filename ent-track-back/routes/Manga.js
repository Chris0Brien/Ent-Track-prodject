const router = require('express').Router()
const db = require("../models")

const { Manga } = db

router.post('/', async (req, res) => {
    const manga = await Manga.create(req.body)
    res.json(manga)
})


router.get('/', async (req, res) => {
    const manga = await Manga.findAll()
    res.json(manga)
})

module.exports = router