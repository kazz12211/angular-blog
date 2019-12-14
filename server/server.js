const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({extended: true, limit: '20mb'}));
app.use(express.static(__dirname + '/client'));
app.use('/auth', require('./api/auth'));
app.use('/external', require('./api/external'));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    mongoose.connect(config.db.uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Database connected');
});