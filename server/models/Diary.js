const db = require('../database/connect')

class Diary {
    constructor({ id, date, time, text, category }) {
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
   

    static async getById(id) {
        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [id])

      if (response.rows.length != 1) {
          throw new Error("Unable find diary entry")
      }
    return new Diary(response.rows[0]);
    }

    async update (data) {
        const text = data.text || this.text
        const response = await db.query("UPDATE diary SET text = $1 WHERE id = $2 RETURNING id, text;",
            [text, this.id]
        )
    }
  
    static async create(data) {
        const { date, time, text, category } = data;
        
        let response = await db.query('INSERT INTO diary (date, time, text, category) VALUES($1, $2, $3, $4) RETURNING *;', 
            [date, time, text, category])
            
            return new Diary(response.rows[0])
    }

    async destroy() {
        let response = await db.query('DELETE FROM diary WHERE id = $1 RETURNING *;', [this.id])
        if (response.rows.length != 1) {
            throw new Error("Unable to delete entry")
        }

        return new Diary(response.rows[0])
    }
}  



module.exports = Diary

