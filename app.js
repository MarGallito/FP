const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const formRoutes = require('./public/routes/form');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/form', formRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});