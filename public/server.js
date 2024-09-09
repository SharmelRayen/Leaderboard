const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can choose any available port

// Serve static files from the "webpages" directory
app.use(express.static(path.join(__dirname, 'webpages')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
