const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Static files
app.use(express.static('public'));

// HTML routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views/register.html')));
app.get('/schemes', (req, res) => res.sendFile(path.join(__dirname, 'views/schemes.html')));
app.get('/weather', (req, res) => res.sendFile(path.join(__dirname, 'views/weather.html')));
app.get('/mandi', (req, res) => res.sendFile(path.join(__dirname, 'views/mandi.html')));
app.get('/grievance', (req, res) => res.sendFile(path.join(__dirname, 'views/grievance.html')));

app.listen(PORT, () => console.log(`KrishiTech running on http://localhost:${PORT}`));
