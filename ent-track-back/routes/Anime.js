const router = require('express').Router()
const db = require("../models")

const { Anime } = db

router.post('/Anime', async (req, res) => {
    console.log(req.body)
    const anime = await Anime.create(req.body)
    res.json(anime)
})


router.get('/', async (req, res) => {
    const anime = await Anime.findAll()
    res.json(anime)
})

router.get('/:animeId', async (req, res) => {
    let animeId = Number(req.params.animeId)
    if (isNaN(animeId)) {
        res.status(404).json({ message: `Invalid id "${animeId}"` })
    } else {
        const anime = await Anime.findOne({
            where: { animeId: animeId }
        })
        if (!anime) {
            res.status(404).json({ message: `Could not find anime with id "${animeId}"` })
        } else {
            res.json(anime)
        }
    }
})

router.put('/:animeId', async (req, res) => {
    let animeId = Number(req.params.animeId)
    if (isNaN(animeId)) {
        res.status(404).json({ message: `Invalid id "${animeId}"` })
    } else {
        const anime = await Anime.findOne({
            where: { animeId: animeId }
        })
        if (!anime) {
            res.status(404).json({ message: `Could not find anime with id "${animeId}"` })
        } else {
            Object.assign(anime, req.body)
            await anime.save()
            res.json(anime)
        }
    }
})


module.exports = router