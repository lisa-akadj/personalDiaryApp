const db = require('../database/connect')

class Diary {
    constructor({ id, date, time, text, category })
    {
        this.id = id,
        this.date = date,
        this.time = time,
        this.text = text,
        this.category = category
    }


static async getAll() {
    const response = await db.query('SELECT * FROM diary ORDER BY date DESC;')

    if (response.rows.length === 0) {
        throw new Error('No diary entries found.')
    }

    return response.rows.map(d => new Diary(d))
}
}  

