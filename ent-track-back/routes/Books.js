const router = require('express').Router()
const db = require("../models")

const { Books } = db

router.post('/', async (req, res) => {
    const books = await Books.create(req.body)
    res.json(books)
})


router.get('/', async (req, res) => {
    const books = await Books.findAll()
    res.json(books)
})

module.exports = router