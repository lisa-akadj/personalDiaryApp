const Diary = require('../models/Diary')

async function index(req, res) {
    try {
        const diary = await Diary.getAll();
        res.status(200).send({data: diary})
    } catch (err) {
        res.status(500).json({"error": err.message})
    }

}





module.exports = { index }