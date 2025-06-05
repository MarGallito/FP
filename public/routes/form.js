const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

// создаём таблицу если не существует
db.run(`CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    db.run(`INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)`,
        [name, email, message],
        function(err) {
            if (err) {
                console.error(err.message);
                return res.status(500).send("Ошибка при сохранении данных.");
            }
            res.status(200).send("Форма успешно отправлена!");
        }
    );
});

module.exports = router;