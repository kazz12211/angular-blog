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

mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
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
        path.startsWith('/img') || 
        path.startsWith('/upload') ||
        path.startsWith('/image')) {
        return next();
    }
    res.redirect('/');
});

app.use('/auth', require('./api/auth'));
app.use('/external', require('./api/external'));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
    res.json({ok: true});
});

app.get('/image/:filename', (req, res) => {
    //gfs.find({
        //filename: req.params.filename
    //}, (err, f) => {
        //if(!f) {
            //return res.status(404).json({error: 'File not found'});
        //}
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    //});
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
