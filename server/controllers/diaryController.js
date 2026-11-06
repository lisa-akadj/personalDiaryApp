const Diary = require('../models/Diary')

async function index(req, res) {
    try {
        const diary = await Diary.getAll();
        res.status(200).send({data: diary})
    } catch (err) {
        res.status(500).json({"error": err.message})
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


module.exports = { index, create }