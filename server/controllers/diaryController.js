const Diary = require('../models/Diary')

async function index(req, res) {
    try {
        const diary = await Diary.getAll();
        res.status(200).send({ data: diary })
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function getById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const diaryEntry = await Diary.getById(id);
        res.status(200).send({ data: diaryEntry })
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function update(req, res) {
    try {
        const id = await Diary.getById(parseInt(req.params.id))
        const data = req.body
        const result = await id.update(data)
        res.status(200).send({data: result})
    } catch (err) {
        res.status(404).json({ "error": err.message})
    }
}

async function create(req, res) {
    try {
       const data = req.body
       const newEntry = await Diary.create(data)
       res.status(201).send({data: newEntry})
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Diary.getById(id)
        await entry.destroy();
        res.status(204).end()
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}


module.exports = { index, getById, update, create, destroy }
