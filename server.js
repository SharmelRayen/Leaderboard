const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'leaderboardDB'
});

app.use(bodyParser.json());
app.use(express.static('public'));

// Fetch events
app.get('/api/events', (req, res) => {
    pool.query('SELECT * FROM events', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Fetch leaderboard for an event
app.get('/api/leaderboard/:eventId', (req, res) => {
    const { eventId } = req.params;
    pool.query('SELECT * FROM scores WHERE event_id = ?', [eventId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
