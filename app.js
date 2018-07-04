const express = require('express');
const health = require('express-healthcheck');

// Constants
const PORT = 8080 || process.env.NODE_PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug');

app.get('/health', health());

app.get('/', (req, res) => {
	res.render('downloads');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);