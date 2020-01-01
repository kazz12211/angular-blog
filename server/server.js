const express = require('express');
const app = express();
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

let gfs;

db.on('error', (err) => {
    console.error(err);
});

db.once('open', () => {
    console.log('Database connected');
    gfs = new mongoose.mongo.GridFSBucket(db.db, {
        bucketName: 'uploads'
    });
});

const storage = new GridFsStorage({
    url: config.db.uri,
    file: (req, file) => {
        return new Promise( (resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage
});

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({extended: true, limit: '20mb'}));
app.use(express.static(__dirname + '/client'));
app.use(errorhandler());

app.use( (req, res, next) => {
    const path = req.path;
    if(
        path.startsWith('/auth') || 
        path.startsWith('/external') || 
        path.startsWith('/media') ||
        path.startsWith('/img') || 
        path.startsWith('/upload') ||
        path.startsWith('/image')) {
        return next();
    }
    res.redirect('/');
});

app.use('/auth', require('./api/auth'));
app.use('/external', require('./api/external'));
app.use('/media', require('./api/media'));

app.post('/upload', upload.single('upload'), (req, res) => {
    const file = req.file;
    res.json({url: `/image/${file.filename}`});
});

/*
app.post('/upload', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        crypto.randomBytes(16, (err, buf) => {
            const filename = buf.toString('hex') + '.jpg';
            fs.writeFile(__dirname+ '/' + filename, body, (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log('File written', filename);
                }
            });
        });
    res.json({url: 'http://localhost:3000/home-bg.jpg'});
    });
});
*/

app.get('/image/:filename', (req, res) => {
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
