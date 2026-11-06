const express = require('express');
const cors = require('cors')

const diaryRouter = require('./routes/diaryRouter');

const app = express()

app.use(cors())
app.use(express.json())

app.use('/diary', diaryRouter)

app.get("/", (req, res) => {
    res.status(200).json({
        title: "Personal diary",
        description: "Start your personal daily journal"
    })
})

module.exports = app;